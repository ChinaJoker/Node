var http = require('http'),
    //创建一个服务器
    server = http.createServer(function(req, res) {
    res.writeHead(200, {
        'Content-Type': 'text/html' //将返回类型由text/plain改为text/html
    });
    res.write('<h1>hello world!</h1>'); //返回HTML标签
    res.end();
});

var express = require('express'),
    app = express(),
    server = require('http').createServer(app),
    io = require('socket.io').listen(server); //引入socket.io模块并绑定到服务器
app.use('/', express.static(__dirname + '/www'));
server.listen(8080);

//socket部分
io.on('connection', function(socket) {
    //接收并处理客户端发送的foo事件
    socket.on('foo', function(data) {
        //将消息输出到控制台
        console.log(data);
    })
});

console.log('server started at 8080');