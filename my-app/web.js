var express = require('express');
var bodyParser = require('body-parser');
var Bmob = require('hydrogen-js-sdk');

Bmob.initialize("b42456a6a9f93f1de1c1639a51496d21", "bc3230dd9cd4181c689c827e1138ba80");
var app = express();
app.use(bodyParser.json()); 
// 解析 application/x-www-form-urlencoded
app.use(bodyParser.urlencoded());

app.all("*",function(req,res,next){
    //设置允许跨域的域名，*代表允许任意域名跨域
    res.header("Access-Control-Allow-Origin","*");
    //允许的header类型
    res.header("Access-Control-Allow-Headers","content-type");
    //跨域允许的请求方式 
    res.header("Access-Control-Allow-Methods","DELETE,PUT,POST,GET,OPTIONS");
    if (req.method.toLowerCase() == 'options')
        res.send(200);  //让options尝试请求快速结束
    else
        next();
})
//主页文章列表
app.get('/home',function(req,res){
	const query = Bmob.Query("article");
	if(req.query.tag){
		query.equalTo("tag","==", req.query.tag);
	}
	query.order("-updatedAt");
	query.find().then(bres => {
		if(bres.length > 0){
			res.send(bres);
		}
	});
})
//头部标签列表
app.get('/head',function(req,res){
	const query = Bmob.Query("tag");
	query.find().then(bres => {
		res.send(bres);
	});
})
//登录
app.post('/head',function(req,res){
	Bmob.User.login(req.body.username,req.body.password).then(bres => {
		if(bres){
			res.send('success');
		}
		}).catch(err => {
			if(err.code === 101)
				res.send('error');
	});
})
//写文章
app.post('/article',function(req,res){
	const query = Bmob.Query('article');
	query.set("title",req.body.title)
	query.set("tag",req.body.tag)
	query.set("content",req.body.content)
	query.set("value",req.body.value)
	query.save().then(bres => {
		res.send(bres)
	})
})
//删除
app.get('/delete',function(req,res){
	const query = Bmob.Query('article');
	query.destroy(req.query.id).then(bres => {
		res.send('success')
	}).catch(err => {
		res.send(err)
	})
})
//编辑
app.get('/edit',function(req,res){
	const query = Bmob.Query('article');
	query.get(req.query.id).then(bres => {
		res.send(bres)
	}).catch(err => {
		res.send(err)
	})
})
app.post('/edit',function(req,res){
	const query = Bmob.Query('article');
	query.set("id",req.body.id)
	query.set("title",req.body.title)
	query.set("tag",req.body.tag)
	query.set("content",req.body.content)
	query.set("value",req.body.value)
	query.save().then(bres => {
		res.send(bres)
	})
})

app.listen(1080,function(){
	console.log('listening port 1080');
})