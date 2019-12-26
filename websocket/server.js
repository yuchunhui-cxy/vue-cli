var ws = require('nodejs-websocket')
var server = ws.createServer(function(conn){
	conn.on('text',function(str){
		server.connections.forEach(function(item){
			item.sendText(str)
		})
	})
	console.log("运行")
}).listen(2333)
