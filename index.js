const express = require('express');
const app = express();

app.get('/', (req, res) => {
  console.log("Server started..");
  res.send({hi: 'there'});
});

app.listen(5000);
