const defaultPort = 9000;

const express = require('express')
const app = express()

app.use(express.urlencoded({ extended: false }));

const path = require('path');
app.use(express.static(__dirname));


app.listen(process.env.PORT || defaultPort, (err) => {
  console.log('Server started on port', defaultPort);
});