const path = require('path');
const express = require('express');
const { env } = require('process');
//const cors = require('cors');
const app = express();
const PORT = 5000;// default Heroku port
const app_name = "frontend-final";
//const folder_path = `${__dirname}/dist/${app_name}`;
const folder_path = `${__dirname}/dist/${app_name}`;


// Serve static files
app.use(express.static(folder_path));
//app.use(cors())

// Send all requests to index.html
app.get('/*', function (req, res) {
	/* res.set('Access-Control-Allow-Origin', "https://back-final-xoje.herokuapp.com");
	res.set('Access-Control-Allow-Headers', 'Content-Type, Authorization, Content-Length, X-Requested-With');
	res.setHeader("Access-Control-Allow-Origin", "*");
	res.setHeader("Access-Control-Allow-Credentials", "true");
	res.setHeader("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT");
	res.setHeader("Access-Control-Allow-Headers", "Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers"); */
	res.sendFile(path.join(folder_path + '/index.html'));

});

const port = process.env.PORT || PORT;

app.listen(port, () => console.log(`Listening on port ${port}`));





