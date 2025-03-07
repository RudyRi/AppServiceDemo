const express = require('express');
const path = require('path');
const axios = require('axios');
const cors = require('cors');
const bodyParser = require('body-parser');
const app = express();

const PORT = process.env.PORT;

// Use CORS middleware
app.use(cors());

// Use body-parser middleware
app.use(bodyParser.json());

// Serve static files from the 'public' directory
app.use(express.static(path.join(__dirname, 'public')));

// Serve the index.html file
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Endpoint to handle the connect button request
app.post('/connect', async (req, res) => {
  const { url } = req.body;
  try {
    const response = await axios.get(`${url}/status`);
    res.send(`${response.data} (Status: ${response.status})`);
  } catch (error) {
    // Differentiate between HTTP errors and network failures
    if (error.response) {
      // Forward the actual status code (e.g., 403, 404)
      res.status(error.response.status).send(`Failed: ${error.message}`);
    } else if (error.request) {
      // No response (timeout, DNS failure)
      res.status(504).send(`Timeout connecting to ${url}`);
    } else {
      res.status(500).send(`Internal error: ${error.message}`);
    }
  }
});

// Endpoint to return a success message
app.get('/status', (req, res) => {
  // Use Azure's forwarded headers to detect HTTPS
  const protocol = req.headers['x-forwarded-proto'] || req.protocol;
  res.send(`Connection to ${protocol}://${req.get('host')} was successful!`);
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});