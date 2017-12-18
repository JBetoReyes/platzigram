var express = require('express');
var app = express();
app.set('view engine', 'pug');

app.use(express.static('public'));

app.get('/', function(req, res){
    res.render('index', {
        title: "Platzigram"
    });
});

app.get('/signup', function(req, res){
    res.render('index', {
        title: "Platzigram - Signup"
    });
});

app.get('/signin', function(req, res){
    res.render('index', {
        title: "Platzigram - Signin"
    });
});

app.get('/api/pictures', function(req, res, next){
    var pictures = [
        {
            user: {
                username: 'Jose',
                avatar: 'https://scontent.fntr6-1.fna.fbcdn.net/v/t1.0-9/14590444_10211153418900784_3682573500301961244_n.jpg?oh=2e86d1543be1778e5987e3194abeac6a&oe=5AB688B3'
            },
            url: 'office.jpg',
            likes:1,
            liked: true,
            createdAt: new Date()
        }, {
            user: {
                username: 'Jose',
                avatar: 'https://scontent.fntr6-1.fna.fbcdn.net/v/t1.0-9/14590444_10211153418900784_3682573500301961244_n.jpg?oh=2e86d1543be1778e5987e3194abeac6a&oe=5AB688B3'
            },
            url: 'office.jpg',
            likes: 2,
            liked: true,
            createdAt: new Date(new Date().setDate(new Date().getDate() - 10))
        }        
    ];
    setTimeout(function(){
        res.send(pictures);
    },2000);
});

app.listen(3000, function(err){
    if(err){
        console.log(err);
        process.exit(1);
    }

    console.log('connected in port: 3000')
});