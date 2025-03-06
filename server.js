const express = require('express');
const path = require('path');
const axios = require('axios');
const cors = require('cors');
const app = express();

const PORT = process.env.PORT || 3000;
const SECOND_APP_URL = process.env.SECOND_APP_URL || 'http://second-app-service-url';

// Use CORS middleware
app.use(cors());

// Serve static files from the 'public' directory
app.use(express.static(path.join(__dirname, 'public')));

// Serve the index.html file
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Endpoint to handle the connect button request
app.get('/connect', async (req, res) => {
  try {
    const response = await axios.get(`${SECOND_APP_URL}/status`);
    res.send(`${response.data} (Status: ${response.status})`);
  } catch (error) {
    if (error.response) {
      // The request was made and the server responded with a status code
      res.status(500).send(`Failed to connect to ${SECOND_APP_URL}. Status: ${error.response.status}. Error: ${error.message}`);
    } else if (error.request) {
      // The request was made but no response was received
      res.status(500).send(`Failed to connect to ${SECOND_APP_URL}. No response received. Error: ${error.message}`);
    } else {
      // Something happened in setting up the request that triggered an Error
      res.status(500).send(`Failed to connect to ${SECOND_APP_URL}. Error: ${error.message}`);
    }
  }
});

// Endpoint to return a success message
app.get('/status', (req, res) => {
  res.send(`Connection to ${req.protocol}://${req.get('host')} was successful!`);
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});