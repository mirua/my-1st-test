// HelloWorldNode - routes/index.js

// 使用モジュールの読み込み
var express = require('express');

// Routerの作成
var router = express.Router();

// 
router.get('/', function(req, res){
	res.render('index');
});

// モジュールのエクスポート
module.exports = router;
