/*
 * @Author: tanzhiyu
 * @Date: 2022-05-23 17:41:52
 * @LastEditors: tanzhiyu
 * @LastEditTime: 2022-05-23 21:10:46
 */
var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  const query = req.query.keyword;
  if (query === "shutdown") {
    process.exit();
    return
  }
  res.render('index', { title: 'Express' });
});

module.exports = router;
