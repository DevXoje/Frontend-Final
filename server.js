const path = require('path');
const express = require('express');
const { env } = require('process');
//const cors = require('cors');
const app = express();
const PORT = 5000;// default Heroku port
const app_name = "Frontend-Final";


// Serve static files
app.use(express.static(__dirname + '/dist/' + app_name));
//app.use(cors())

// Send all requests to index.html
app.get('/*', function (req, res) {
	res.set('Access-Control-Allow-Origin', "https://back-final-xoje.herokuapp.com");
	res.sendFile(path.join(__dirname + '/dist/' + app_name + '/index.html'));
});

const port = process.env.PORT || PORT;

app.listen(port, () => console.log(`Listening on port ${port}`));





