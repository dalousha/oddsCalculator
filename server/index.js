const express = require('express');

const app = express();

const PORT = 1234

app.use(express.json())
app.use(express.static(__dirname + '/../client/public'));

app.get('/', (req, res) => {
  res.send('hello')
  console.log('hello')
})

app.get('/home', (req, res) => {
  res.send('hello, this is the home page')
  console.log('This is the home page')
})

app.get('/calculator', (req, res) => {
  res.send('hi, this is the calculator page')
  console.log('This is the calculator page')
})

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
})