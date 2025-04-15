const express = require('express');
const promClient = require('prom-client');
const app = express();
const port = 3000;

const register = new promClient.Registry();
promClient.collectDefaultMetrics({ register });

const recipeCounter = new promClient.Counter({
    name: 'recipe_submissions_total',
    help: 'Total number of recipe submissions',
    registers: [register]
});
const ratingGauge = new promClient.Gauge({
    name: 'recipe_rating_average',
    help: 'Average rating of submitted recipes',
    registers: [register]
});
const ingredientCounter = new promClient.Counter({
    name: 'ingredient_submissions_total',
    help: 'Total submissions per ingredient',
    labelNames: ['ingredient'],
    registers: [register]
});
const requestDurationHistogram = new promClient.Histogram({
    name: 'http_request_duration_seconds',
    help: 'Duration of HTTP requests in seconds',
    labelNames: ['method', 'route', 'status_code'],
    buckets: [0.1, 0.5, 1, 2, 5]
});

let recipes = [];

app.use(express.json());
app.use(express.static('.'));

app.use((req, res, next) => {
    const start = Date.now();
    res.on('finish', () => {
        const duration = (Date.now() - start) / 1000;
        requestDurationHistogram.observe({ method: req.method, route: req.path, status_code: res.statusCode }, duration);
    });
    next();
});

app.post('/recipes', (req, res) => {
    const { name, ingredients, rating } = req.body;
    recipes.push({ name, ingredients, rating, timestamp: new Date().toISOString() });
    
    recipeCounter.inc();
    ratingGauge.set(recipes.reduce((sum, r) => sum + r.rating, 0) / recipes.length);
    ingredients.forEach(i => ingredientCounter.labels(i).inc());

    res.status(201).send('Recipe submitted');
});

app.get('/metrics', async (req, res) => {
    res.set('Content-Type', register.contentType);
    res.end(await register.metrics());
});

app.listen(port, () => console.log(`Server running on port ${port}`));