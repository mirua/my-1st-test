// HelloWorldNode - app.js

// 使用モジュールの読み込み
var express = require('express');
var path = require('path');
var logger = require('morgan');
var favicon = require('serve-favicon');
var routes = require('./routes');

// アプリケーションの作成
var app = express();

// ビューの作成
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// ミドルウェアの設定
app.use(express.static(__dirname + '/public'));
app.use(favicon(__dirname + '/public/img/favicon.ico'));
app.use(logger('combined'));

// ルーティングの設定
app.use('/', routes);

// リクエストの受け付け
var server = app.listen(process.env.PORT || 3000, function() {
	console.log('Listening on port %d', server.address().port);
});
