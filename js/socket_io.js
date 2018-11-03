define(["js/functions", "js/processing"], function (functions, processing) {

    var express = require('express');
    var path = require('path');
    var app = express();
    var server = require('http').createServer(app);
    var io = require('socket.io').listen(server);
    var cors = require('cors');
    var request = require('request'); // "Request" library
    var querystring = require('querystring');
    var cookieParser = require('cookie-parser');

    var client_id = '65355e53d1354013b3c08529cc009bd9'; // Your client id
    var client_secret = 'e48252200e28443b97985055db86eb18'; // Your secret
    var redirect_uri = 'http://localhost:4000/callback'; // Your redirect uri

    /**
     * Generates a random string containing numbers and letters
     * @param  {number} length The length of the string
     * @return {string} The generated string
     */




    return {

        generateRandomString: function (length) {
            var text = '';
            var possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

            for (var i = 0; i < length; i++) {
                text += possible.charAt(Math.floor(Math.random() * possible.length));
            }
            return text;
        },

        sendData: function () {
            const editJsonFile = require("edit-json-file");
            let file = editJsonFile(`./weatherJson/weather.json`);
            var weatherJson = file.get();
            weather = weatherJson.weather;


            // date
            io.emit('date1', { data: weather[0].date });
            io.emit('date2', { data: weather[1].date });
            io.emit('date3', { data: weather[2].date });
            io.emit('date4', { data: weather[3].date });
            io.emit('date5', { data: weather[4].date });

            // week day
            io.emit('weekDay1', { data: weather[0].weekDay });
            io.emit('weekDay2', { data: weather[1].weekDay });
            io.emit('weekDay3', { data: weather[2].weekDay });
            io.emit('weekDay4', { data: weather[3].weekDay });
            io.emit('weekDay5', { data: weather[4].weekDay });

            // high
            io.emit('high1', { data: weather[0].high });
            io.emit('high2', { data: weather[1].high });
            io.emit('high3', { data: weather[2].high });
            io.emit('high4', { data: weather[3].high });
            io.emit('high5', { data: weather[4].high });

            // low
            io.emit('low1', { data: weather[0].low });
            io.emit('low2', { data: weather[1].low });
            io.emit('low3', { data: weather[2].low });
            io.emit('low4', { data: weather[3].low });
            io.emit('low5', { data: weather[4].low });

            // six
            io.emit('six1', { data: weather[0].six.temp });
            io.emit('six2', { data: weather[1].six.temp });
            io.emit('six3', { data: weather[2].six.temp });
            io.emit('six4', { data: weather[3].six.temp });
            io.emit('six5', { data: weather[4].six.temp });

            // nine
            io.emit('nine1', { data: weather[0].nine.temp });
            io.emit('nine2', { data: weather[1].nine.temp });
            io.emit('nine3', { data: weather[2].nine.temp });
            io.emit('nine4', { data: weather[3].nine.temp });
            io.emit('nine5', { data: weather[4].nine.temp });

            // twelve
            io.emit('twelve1', { data: weather[0].twelve.temp });
            io.emit('twelve2', { data: weather[1].twelve.temp });
            io.emit('twelve3', { data: weather[2].twelve.temp });
            io.emit('twelve4', { data: weather[3].twelve.temp });
            io.emit('twelve5', { data: weather[4].twelve.temp });


            // fifteen
            io.emit('fifteen1', { data: weather[0].fifteen.temp });
            io.emit('fifteen2', { data: weather[1].fifteen.temp });
            io.emit('fifteen3', { data: weather[2].fifteen.temp });
            io.emit('fifteen4', { data: weather[3].fifteen.temp });
            io.emit('fifteen5', { data: weather[4].fifteen.temp });


            // eightteen
            io.emit('eightteen1', { data: weather[0].eightteen.temp });
            io.emit('eightteen2', { data: weather[1].eightteen.temp });
            io.emit('eightteen3', { data: weather[2].eightteen.temp });
            io.emit('eightteen4', { data: weather[3].eightteen.temp });
            io.emit('eightteen5', { data: weather[4].eightteen.temp });


            // twentyone
            io.emit('twentyone1', { data: weather[0].twentyone.temp });
            io.emit('twentyone2', { data: weather[1].twentyone.temp });
            io.emit('twentyone3', { data: weather[2].twentyone.temp });
            io.emit('twentyone4', { data: weather[3].twentyone.temp });
            io.emit('twentyone5', { data: weather[4].twentyone.temp });

            // six
            io.emit('sixdesc1', { data: weather[0].six.description });
            io.emit('sixdesc2', { data: weather[1].six.description });
            io.emit('sixdesc3', { data: weather[2].six.description });
            io.emit('sixdesc4', { data: weather[3].six.description });
            io.emit('sixdesc5', { data: weather[4].six.description });

            // nine
            io.emit('ninedesc1', { data: weather[0].nine.description });
            io.emit('ninedesc2', { data: weather[1].nine.description });
            io.emit('ninedesc3', { data: weather[2].nine.description });
            io.emit('ninedesc4', { data: weather[3].nine.description });
            io.emit('ninedesc5', { data: weather[4].nine.description });

            // twelve
            io.emit('twelvedesc1', { data: weather[0].twelve.description });
            io.emit('twelvedesc2', { data: weather[1].twelve.description });
            io.emit('twelvedesc3', { data: weather[2].twelve.description });
            io.emit('twelvedesc4', { data: weather[3].twelve.description });
            io.emit('twelvedesc5', { data: weather[4].twelve.description });


            // fifteen
            io.emit('fifteendesc1', { data: weather[0].fifteen.description });
            io.emit('fifteendesc2', { data: weather[1].fifteen.description });
            io.emit('fifteendesc3', { data: weather[2].fifteen.description });
            io.emit('fifteendesc4', { data: weather[3].fifteen.description });
            io.emit('fifteendesc5', { data: weather[4].fifteen.description });


            // eightteen
            io.emit('eightteendesc1', { data: weather[0].eightteen.description });
            io.emit('eightteendesc2', { data: weather[1].eightteen.description });
            io.emit('eightteendesc3', { data: weather[2].eightteen.description });
            io.emit('eightteendesc4', { data: weather[3].eightteen.description });
            io.emit('eightteendesc5', { data: weather[4].eightteen.description });


            // twentyone
            io.emit('twentyonedesc1', { data: weather[0].twentyone.description });
            io.emit('twentyonedesc2', { data: weather[1].twentyone.description });
            io.emit('twentyonedesc3', { data: weather[2].twentyone.description });
            io.emit('twentyonedesc4', { data: weather[3].twentyone.description });
            io.emit('twentyonedesc5', { data: weather[4].twentyone.description });


        },

        socket_setup: function (port) {

            var generateRandomString = function (length) {
                var text = '';
                var possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

                for (var i = 0; i < length; i++) {
                    text += possible.charAt(Math.floor(Math.random() * possible.length));
                }
                return text;
            };

            var stateKey = 'spotify_auth_state';

            __dirname = path.resolve(path.dirname(''));

            //Set Static Path
            //app.use('/public', express.static(path.join(__dirname + '/public')));

            app.use('/public', express.static(path.join(__dirname + '/public')))
                .use(cors())
                .use(cookieParser());

            app.get('/login', function (req, res) {

                var state = generateRandomString(16);
                res.cookie(stateKey, state);

                // your application requests authorization
                var scope = 'user-read-private user-read-email';
                res.redirect('https://accounts.spotify.com/authorize?' +
                    querystring.stringify({
                        response_type: 'code',
                        client_id: client_id,
                        scope: scope,
                        redirect_uri: redirect_uri,
                        state: state
                    }));
            });


            app.get('/callback', function (req, res) {

                // your application requests refresh and access tokens
                // after checking the state parameter

                var code = req.query.code || null;
                var state = req.query.state || null;
                var storedState = req.cookies ? req.cookies[stateKey] : null;

                if (state === null || state !== storedState) {
                    res.redirect('/#' +
                        querystring.stringify({
                            error: 'state_mismatch'
                        }));
                } else {
                    res.clearCookie(stateKey);
                    var authOptions = {
                        url: 'https://accounts.spotify.com/api/token',
                        form: {
                            code: code,
                            redirect_uri: redirect_uri,
                            grant_type: 'authorization_code'
                        },
                        headers: {
                            'Authorization': 'Basic ' + (new Buffer(client_id + ':' + client_secret).toString('base64'))
                        },
                        json: true
                    };

                    request.post(authOptions, function (error, response, body) {
                        if (!error && response.statusCode === 200) {

                            var access_token = body.access_token,
                                refresh_token = body.refresh_token;

                            var options = {
                                url: 'https://api.spotify.com/v1/me',
                                headers: { 'Authorization': 'Bearer ' + access_token },
                                json: true
                            };

                            // use the access token to access the Spotify Web API
                            request.get(options, function (error, response, body) {
                                console.log(body);
                            });

                            // we can also pass the token to the browser to make requests from there
                            res.redirect('/#' +
                                querystring.stringify({
                                    access_token: access_token,
                                    refresh_token: refresh_token
                                }));
                        } else {
                            res.redirect('/#' +
                                querystring.stringify({
                                    error: 'invalid_token'
                                }));
                        }
                    });
                }
            });

            app.get('/refresh_token', function (req, res) {

                // requesting access token from refresh token
                var refresh_token = req.query.refresh_token;
                var authOptions = {
                    url: 'https://accounts.spotify.com/api/token',
                    headers: { 'Authorization': 'Basic ' + (new Buffer(client_id + ':' + client_secret).toString('base64')) },
                    form: {
                        grant_type: 'refresh_token',
                        refresh_token: refresh_token
                    },
                    json: true
                };

                request.post(authOptions, function (error, response, body) {
                    if (!error && response.statusCode === 200) {
                        var access_token = body.access_token;
                        res.send({
                            'access_token': access_token
                        });
                    }
                });
            });

            app.get('/refresh_token', function (req, res) {

                // requesting access token from refresh token
                var refresh_token = req.query.refresh_token;
                var authOptions = {
                    url: 'https://accounts.spotify.com/api/token',
                    headers: { 'Authorization': 'Basic ' + (new Buffer(client_id + ':' + client_secret).toString('base64')) },
                    form: {
                        grant_type: 'refresh_token',
                        refresh_token: refresh_token
                    },
                    json: true
                };

                request.post(authOptions, function (error, response, body) {
                    if (!error && response.statusCode === 200) {
                        var access_token = body.access_token;
                        res.send({
                            'access_token': access_token
                        });
                    }
                });
            });

            //including index.html file
            app.get('/', function (req, res, next) {
                res.sendFile(__dirname + '/index.html');
            });

            app.get('/login', function (req, res) {
                var scopes = 'user-read-private user-read-email user-read-playback-state';
                res.redirect('https://accounts.spotify.com/authorize' +
                    '?response_type=code' +
                    '&client_id=' + my_client_id +
                    (scopes ? '&scope=' + encodeURIComponent(scopes) : '') +
                    '&redirect_uri=' + encodeURIComponent(redirect_uri));
            });



            // Emit welcome message on connection
            io.on('connection', function (socket) {
                // Use socket to communicate with this particular client only, sending it it's own id
                socket.emit('start', { message: 'USER COUNTER', id: socket.id });
                socket.on('i am client', console.log);
            });


            server.listen(port, function () {
                console.log('Server started on Port ' + port + '...');
            });
        }
    }

});