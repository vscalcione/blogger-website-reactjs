//install express server
const express = require('express');
const path = require('path');

const app = express();

//Serve only the static files for the dist directory
app.use(express.static(__dirname + '/dist/blogger-website-reactjs'));

app.get('/*', (req, res) => {
	res.sendFile(path.join(__dirname + '/dist/blogger-webiste-reactjs/index.html'));
});

//Start the app listening on the default Heroku port
app.listen(process.env.PORT || 8080);
