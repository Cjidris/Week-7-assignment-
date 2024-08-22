const express = require('express');
const app = express();
const port = 5000;

// Numeric Data Endpoint
app.get('/numbers', (req, res) => {
  const numbers = [1, 3, 7, 42, 99];
  res.json(numbers);
});

// String Data Endpoint
app.get('/strings', (req, res) => {
  const strings = ["apple", "banana", "cherry"];
  res.json(strings);
});

// Object Data Endpoint
app.get('/people', (req, res) => {

  const people = [
    { "name": "Alice", "age": 30, "occupation": "Engineer" },
    { "name": "Bob", "age": 25, "occupation": "Designer" }
  ];
  res.json(people);
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
