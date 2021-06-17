const proxy = require('http-proxy-middleware');
module.exports = function(app) {
    app.use(proxy('/', 
        { target: 'https://login1x.herokuapp.com/' }
    ));
}