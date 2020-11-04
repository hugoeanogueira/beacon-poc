const express = require('express');
const router = express.Router();

router.get('/', function(req, res) {
  console.log(req.method, req.url);
  res.render('index', { title: 'Express' });
});

router.post('/delete', function(req, res) {
  console.log(req.method, req.url, req.body);
  res.json({ status: 'ok' });
});

module.exports = router;
