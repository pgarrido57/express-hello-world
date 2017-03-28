'use strict';

const express = require('express');
const app = express();

const requestTime = (req, res, next) => {
  req.requestedTime = new Date().toISOString();
  next();
}

app.use(requestTime);

app.get('/', (req, res) => {
    res.send('Hello World!');
    console.log(`This ran at ${req.requestedTime}`)
});

const port = process.env.PORT || 8080
app.set('port', port)

app.listen(port, () =>
  console.log(`Listening on port ${port}`)
)
