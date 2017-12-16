var express = require('express');
var app = express();

app.get('/', function(req, res){
    res.send('Hello world');
});

app.listen(3000, function(err){
    if(err){
        console.log(err);
        process.exit(1);
    }

    console.log('connected in port: 3000')
});