var page = require('page');
var empty = require('empty-element');
var template = require('./template');
var title = require('title');
var request = require('superagent');
var header = require('../header');
var axios = require('axios');

page('/',header, loadPicturesAxios, function(ctx, next){
    title('Platzigram');
    var main = document.getElementById('main-container');

    empty(main).appendChild(template(ctx.pictures));
});

function loadPictures(ctx, next){
    request
        .get('/api/pictures')
        .end(function(err, res){
            if(err){
                return console.log(err);
            }
            ctx.pictures = res.body.map(function(picture){
                picture.createdAt = new Date(picture.createdAt);
                return picture;
            });
            next();
        });
};

function loadPicturesAxios(ctx, next){
    request
        .get('/api/pictures')
        .then(function(res){
            ctx.pictures = res.body.map(function(picture){
                picture.createdAt = new Date(picture.createdAt);
                return picture;
            });
            next();
        })
        .catch(function(err){
            if(err){
                console.log(err);
            }
        });
};
