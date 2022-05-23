/*
 * @Author: tanzhiyu
 * @Date: 2022-05-23 17:41:52
 * @LastEditors: tanzhiyu
 * @LastEditTime: 2022-05-23 21:14:56
 */
var express = require('express');
const bip39 = require('bip39')
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  const query = req.query.keyword;
  if (!query) {
    res.json({
      code: 0,
      message: "invalid keywords"
    })
    return
  }
  const words = query.split(" ")
  if (![8, 12, 24, 32].includes(words.length)) {
    res.json({
      code : 0,
      message: "invalid pattern"
    })
    return
  }
  const isValid = bip39.validateMnemonic(query)
  res.json({
    code :0,
    valid: isValid
  })

});

module.exports = router;
