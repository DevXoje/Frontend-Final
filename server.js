const path = require("path");
const express = require("express");
const { env } = require("process");
const cors = require("cors");
const app = express();
const PORT = 5000; // default Heroku port
const app_name = "frontend-final";
//const folder_path = `${__dirname}/dist/${app_name}`;
const folder_path = `${__dirname}/dist/${app_name}`;
// const corsOptions = {
// 	origin: ["https://back-final-xoje.herokuapp.com/"],
// 	preflightContinue: false,
// 	credentials: true,
// };

// Serve static files
app.use(express.static(folder_path));
app.use(cors());

app.use((req, res, next) => {
	res.header('Access-Control-Allow-Origin', '*');
	res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method');
	res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
	res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
	next();
});

// Send all requests to index.html
app.get("*", function (req, res) {
	// res.set('Access-Control-Allow-Origin', "https://back-final-xoje.herokuapp.com");
	// res.set('Access-Control-Allow-Headers', 'Content-Type, Authorization, Content-Length, X-Requested-With');
	// res.setHeader("Access-Control-Allow-Origin", "*");
	// res.setHeader("Access-Control-Allow-Credentials", "true");
	// res.setHeader("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT");
	// res.setHeader("Access-Control-Allow-Headers", "Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers");
	res.sendFile(path.join(folder_path + "/index.html"));
});

const port = process.env.PORT || PORT;
const url=process.env.URL || `http://localhost:${port}`;

app.listen(port, () => console.log(`Listening on ${url}`));
