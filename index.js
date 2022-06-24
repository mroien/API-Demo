const express = require('express');
const app = express();
const PORT = 8080;

// Starts server
app.listen(
  PORT,
)

app.use(express.json());

// Creates first index
app.get('/tshirt', (req, res) => {
  res.status(200).send({
    tshirt: 'JS',
    size: 'large'
  })
})

app.post('/tshirt/:id', (req, res) => {
  const { id } = req.params;
  const { logo } = req.body;

  if (!logo) {
    res.status(418).send({ message: 'We need a logo!' })
  }

  res.send({
    tshirt: `JS with your ${logo} and ID of ${id}`
  });
})
