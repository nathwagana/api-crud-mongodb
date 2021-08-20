const express = require('express');
const bodyParser = require('body-parser');
const routes = require('./src/routes/product.routes');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false}));

app.listen(3000);
app.use(routes);
console.log("Application is listening port 5000")