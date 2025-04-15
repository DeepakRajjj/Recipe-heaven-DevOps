# Recipe Haven

A beautiful recipe sharing platform where users can submit, rate, and discover delicious recipes from around the world.

![Recipe Haven](https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2070&auto=format&fit=crop)

## Features

- **Share Recipes**: Submit your favorite recipes with ingredients and ratings
- **Rate Recipes**: Rate recipes on a scale of 1-5
- **Discover New Dishes**: Browse through community-submitted recipes
- **Responsive Design**: Works on desktop and mobile devices
- **Prometheus Integration**: Built-in metrics for monitoring

## Tech Stack

- **Frontend**: HTML, CSS, JavaScript
- **Backend**: Node.js, Express
- **Monitoring**: Prometheus metrics
- **Containerization**: Docker

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm (v6 or higher)
- Docker (for containerization)

### Local Development

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/recipe-haven.git
   cd recipe-haven
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm start
   ```

4. Open your browser and navigate to:
   ```
   http://localhost:3000
   ```

## Docker Deployment

### Building the Docker Image

```bash
docker build -t yourusername/recipe-haven:latest .
```

### Running the Docker Container

```bash
docker run -p 3000:3000 yourusername/recipe-haven:latest
```

### Pushing to Docker Hub

1. Log in to Docker Hub:
   ```bash
   docker login
   ```

2. Push the image:
   ```bash
   docker push yourusername/recipe-haven:latest
   ```

## API Endpoints

- `GET /` - Serves the main application
- `POST /recipes` - Submit a new recipe
- `GET /metrics` - Prometheus metrics endpoint

## Metrics

The application collects the following metrics:

- Total number of recipe submissions
- Average recipe rating
- Total submissions per ingredient

## Project Structure

```
recipe-haven/
├── images/            # Image assets
├── index.html         # Main HTML file
├── server.js          # Express server
├── styles.css         # CSS styles
├── package.json       # Project dependencies
├── dockerfile         # Docker configuration
└── README.md          # Project documentation
```

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the ISC License - see the LICENSE file for details.

## Acknowledgments

- Recipe images from [Unsplash](https://unsplash.com/)
- Icons from [Font Awesome](https://fontawesome.com/)
