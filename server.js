// https://stackoverflow.com/questions/54680727/heroku-serving-create-react-app-development-build-instead-of-production

const express = require('express');
const favicon = require('express-favicon');
const path = require('path');
const port = process.env.PORT || 8080;
const app = express();
app.use(favicon(__dirname + '/build/favicon.ico'));
// the __dirname is the current directory from where the script is running

// https://www.reddit.com/r/webdev/comments/ai5ul2/heroku_shows_a_blank_page_when_i_go_to_my_website/eemqj97?utm_source=share&utm_medium=web2x
// app.use(express.static(__dirname));
app.use(express.static(__dirname + '/client/build'));

app.use(express.static(path.join(__dirname, 'build')));
app.get('/ping', function (req, res) {
  return res.send('pong');
});
app.get('/*', function (req, res) {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});
app.listen(port);
