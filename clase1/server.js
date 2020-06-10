const express = require('express');
const app = express();

app.get('/', function (req, res) {
  res.status(200).json({
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

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});
