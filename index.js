const express = require('express');
const app = express();
const port = 3000;
app.get('/', (req, res) => {
  res.send('Hello	World!');
});

app.get('/hello-world-2', (req, res) => {
  res.send('halo dunia!');
})
app.listen(port, () => {
  console.log(`App	listening	on	port	${port}`);
});
