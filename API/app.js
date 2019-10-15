var express = require('express');
const bodyParser = require('body-parser');
var transactions = require('./transactions.js');
var app = express();
app.use(bodyParser.json());

app.all('/*', function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    next();
});

app.get('/', function(req, res){
         res.send("Sever is runing on server 8081")
 });

app.get('/services/list', function(req, res){
   setTimeout(function(){
        res.send({
            success: true,
            data: transactions,
            pagination: {
                total: transactions.length,
                start: 0,
                limit: 100
            }
        })
    },1000);
});

app.get('/services/details', function(req, res){
    res.send({
        success: true,
        data: transactions.filter(item => item.account == req.query.account)[0]
    })
});

app.listen(8081, function(){
    console.log("Sever is runing on server 8081")
});