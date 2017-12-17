var page = require('page'); // router tool module
var moment = require('moment');
require('moment/locale/es');
moment.locale('es');
require('./homepage');
require('./signup');
require('./signin');

page();