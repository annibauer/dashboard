var requirejs = require('requirejs');

const INTERVAL = 1000 * 60 * 15
var port = (process.env.PORT || 4000);

requirejs(["js/synchronousCall", "js/socket_io"], function (synchronousCall, socket_io) {
    socket_io.socket_setup(port);
    synchronousCall.syncCall();
    setInterval(function(){synchronousCall.syncCall()},INTERVAL);

});