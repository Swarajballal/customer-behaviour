
const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.json());

app.post('/pixel', (req, res) => {
  const event = req.body;
  console.log('Event received:', event);
  // Store the event data in your database
  res.status(200).send('Event received');
});

app.listen(3000, () => {
  console.log('Pixel server listening on port 3000');
});