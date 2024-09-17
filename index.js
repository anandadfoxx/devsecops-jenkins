const express = require('express');
const app = express();
const port = 3000;
app.get('/', (req, res) => {
  res.send('Hello	World!');
});

app.get('/hello-world-2', (req, res) => {
  res.send('halo dunia!');
})
app.get('/hello-world-3', (req, res) => {
  res.send('halo dunia dari endpoint 3!');
})
app.get('/hello-world-4', (req, res) => {
  res.send('halo dunia dari endpoint 4!');
})
app.get('/hello-world-5', (req, res) => {
  res.send('halo dunia dari endpoint 5!');
})
app.listen(port, () => {
  console.log(`App	listening	on	port	${port}`);
});
