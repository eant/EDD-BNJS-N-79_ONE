const express = require('express');
const app = express();

const port = 3000;

app.get('/', function (req, res) {
  res
    .status(200)
    .json({
      message: 'hello word',
      status: 200,
      peliculas: [
          {
              title: 'peli1',
              description: 'desc 1',
              image: 'http://imagen.jpg'
          }
      ]
    });
});

app.listen(port, function () {
  console.log(`Example app listening on port ${port}!`);
});
