//npm install express （tip: 按住Shift同时右击，可以在右键菜单中找到’从此处打开命令行’选项）
//然后在server.js中通过require(‘express’)将其引入到项目中进行使用
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
//引入express模块
app = express(),
server = require('http').createServer(app);
app.use('/', express.static(__dirname + '/www')); //指定静态HTML文件的位置

//Node.js中使用socket的一个包。使用它可以很方便地建立服务器到客户端的sockets连接，发送事件与接收特定事件。
//同样通过npm进行安装 npm install socket.io 。安装后在node_modules文件夹下新生成了一个socket.io文件夹，其中我们可以找到一个socket.io.js文件。
//将它引入到HTML页面，这样我们就可以在前端使用socket.io与服务器进行通信了

//监听80端口
server.listen(8080);
console.log('server started at 8080');