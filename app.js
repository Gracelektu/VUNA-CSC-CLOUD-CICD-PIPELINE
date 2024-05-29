const express = require('express');
const app = express();
const port = 8080;

app.get('/', (req, res) => res.send('Name: Grace John Lektu, matric: vug/csc/21/5634'));

app.listen(port);
console.log(`App running on http://localhost:${port}`);
