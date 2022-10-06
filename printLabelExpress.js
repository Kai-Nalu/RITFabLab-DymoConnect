//init express
const express = require("express");
const app = express();
//init https and fs and path
const https = require("https");
const fs = require("fs");
const path = require("path");
//set port
const port = 3127;

//init dymo code
const printText = require("./printText");
const printTicket = require("./printTicket");

//start server on port
https
	.createServer(
		{
			key: fs.readFileSync(path.join(__dirname,"openssl/key.pem")),
			cert: fs.readFileSync(path.join(__dirname,"openssl/cert.pem"))
		},
		app
	)
	.listen(port, ()=>{
		console.log(`printLabelExpress running on port ${port}!`);
	});

//landing page response route
app.get("/", function (req, res) {
	res.send('Landing page for FabLab-DymoConnect nodejs app\n');
});

//print response route
app.get("/printText/:text", function (req, res) {
	res.send(req.params.text);
	//print the label
	printText.printText(req.params.text);
});

//print ticket response route
app.get("/printTicket/:key", function (req, res) {
	console.log(`Attempting ticket ${req.params.key}`);
	res.send(req.params);
	//print the label
	printTicket.printTicket(req.params.key);
});