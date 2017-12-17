var page = require('page'); // router tool module
var main = document.getElementById('main-container');

page('/', function(ctx, next){
    main.innerHTML = 'Home <a href="/signup">Signup</a>'; //Change id for home
});

page('/signup', function(ctx, next){
    main.innerHTML = '<a href="/">Home</a> Signup'; // Change id for Signup
});

page();