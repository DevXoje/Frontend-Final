const path = require('path');
const express = require('express');
const app = express();
const app_name = require('./package.json').name;
const main_path = path.join(__dirname, 'src');
// Serve static files
app.use(express.static(`${__dirname}/dist/${app_name}`));

// Send all requests to index.html
app.get('/*', function (req, res) {
	res.sendFile(path.join(`${__dirname}/dist/${app_name}/index.html`));
});

// default Heroku port
app.listen(process.env.PORT || 5000);
