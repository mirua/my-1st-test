# Hello World Sample Program - Node.js running on IBM Bluemix
IBM BluemixでNode.jsのプログラムを始めて動かす人向けのサンプルプログラム

## 前提
1. Git クライアントが導入されていること
2. cfツールが導入されていること
    * cfツールのインストールは、「Bluemixマニュアル」の["Cloud Foundry コマンド・ライン・インターフェースを使用したコーディングの開始"](https://www.ng.bluemix.net/docs/#starters/install_cli.html)を参照

## 作業の流れ
1. Githubからサンプルプログラムを取得
2. manifest.yml を編集
3. IBM Bluemixにサンプルプログラムをpush

## 1. Githubからサンプルプログラムを取得
Githubからサンプルプログラムを取得

`git clone https://github.com/asmanabu/HelloWorldNode`

ここでは、C:\work\HelloWorldNode にcloneしたこととします。

## 2. manifest.yml を編集
manifest.yml は、Bluemixにアプリケーションをデプロイするときに参照されるファイルです。
アプリケーションが使用するホスト名は、Bluemixを利用する全ユーザーで重複が許されないため、ここで編集します。

エディターで C:\work\HelloWorldNode\manifest.yml を開きます。
*\<change to your hostname\>* の部分を修正してください。

## 3. IBM Bluemixにサンプルプログラムをpush
サンプルプログラムをBluemixにデプロイします。

C:\work\HelloWorldNode\ に移動し、`cf push`を実行します。
現在のディレクトリ以下にあるすべてのファイルをBluemixに転送します。**不要なファイルを転送しないように、必ずディレクトリを移動してください。**
