//init express
const express = require("express");
const app = express();
//set port
const port = 3000;

//init dymo code
const printText = require("./printText");
const printTicket = require("./printTicket");

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
app.get("/printTicket/:key.:name.:reporter.:birthday.:copies", function (req, res) {
	res.send(req.params);
	//print the label
	printTicket.printTicket(req.params.key,
							req.params.name,
							req.params.reporter,
							req.params.birthday,
							req.params.copies);
});

//start server on port
app.listen(port, function () {
	console.log(`printLabelExpress running on port ${port}!`);
});