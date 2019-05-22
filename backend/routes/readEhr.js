const express = require("express");
const bodyParser = require('body-parser');

const router = express.Router();

app.use('body-parser');

router.get("/readEhr", (req, res, next) => {
  request('/readEhr', (error, response, body) => {
    if (!error && response.statusCode == 200) {
      var info = JSON.parse(body);
      // do more stuff
      res.send(info);
      console.log(req.body);
    }
  });
});
