//init express
const express = require("express");
const app = express();
//init https and fs
const https = require("https");
const fs = require("fs");
//set port
const port = 3126;

//init dymo code
const printText = require("./printText");
const printTicket = require("./printTicket");

//start server on port
https
	.createServer(
		{
			key: fs.readFileSync("openssl/key.pem"),
			cert: fs.readFileSync("openssl/cert.pem")
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
	res.send(req.params);
	//print the label
	printTicket.printTicket(req.params.key);
});