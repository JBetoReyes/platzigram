var page = require('page');
var empty = require('empty-element');
var template = require('./template');
var title = require('title');

page('/', function(ctx, next){
    title('Platzigram');
    var main = document.getElementById('main-container');
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
            createdAt: new Date().setDate(new Date().getDate() - 10)
        }        
    ];    
    empty(main).appendChild(template(pictures));

});