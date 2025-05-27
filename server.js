const express = require('express');
const bodyParser = require('body-parser');
// const cors = require('cors');
const app = express();
const port = 3000;

// app.use(cors());
app.use(bodyParser.json());

// Sample route
app.get('/api/hello', (req, res) => {
  res.json({ message: 'Hello, World!' });
});


app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});