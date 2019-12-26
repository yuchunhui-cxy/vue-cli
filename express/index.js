var express = require('express')
var bodyParser = require('body-parser')
var app = express()

app.use(bodyParser.json())


app.post('/abc',function(req,res){
	console.log("前端发来的是:",req.body.name)
	res.json({"name":"我是端口3000传来的数据"})

})

app.listen(3000)
console.log('listen.....')
