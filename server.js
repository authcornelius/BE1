const express = require('express');
const path = require('path');

const app = express();

// Middleware to serve static files from 'views' directory
app.use(express.static(path.join(__dirname, 'views')));

// Default route to serve the HTML file
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'views', 'index.html'));
});

// Set the port for the server
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
