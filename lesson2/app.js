// 引入依赖
var express = require('express');
var utility = require('utility');

//建立express实例
var app = express();

app.get('/',function(req,res){
  //从req.query中取出我们需要的q参数
  // 如果是 post 传来的 body 数据，则是在 req.body 里面，不过 express 默认不处理 body 中的信息，需要引入 https://github.com/expressjs/body-parser 这个中间件才会处理，这个后面会讲到。
  // 如果分不清什么是 query，什么是 body 的话，那就需要补一下 http 的知识了
  var q = req.query.q;
  // 调用 utility.md5 方法，得到 md5 之后的值
  // 之所以使用 utility 这个库来生成 md5 值，其实只是习惯问题。每个人都有自己习惯的技术堆栈，
  var sha1Value = utility.sha1(q);
  res.send(sha1Value);
});
app.listen(3000,function (req, res) {
  console.log('app is running at port 3000');
});
