const path = require('path');
const express = require('express');
const app = express();
const app_name = "Frontend-Final";


// Serve static files
app.use(express.static(__dirname + '/dist/' + app_name));


// Send all requests to index.html
app.get('/*', function (req, res) {
	res.sendFile(path.join(__dirname + '/dist/' + app_name + '/index.html'));
});

const port = process.env.PORT || 5000;
// default Heroku port
app.listen(port, () => console.log(`Listening on port ${port}`));





