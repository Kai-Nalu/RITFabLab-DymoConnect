//init express
const express = require("express");
const app = express();
//set port
const port = 3000;

//init dymo code
const printTicket = require("./printTicket");

//landing page response route
app.get("/", function (req, res) {
	res.send('Landing page for FabLab-DymoConnect nodejs app\n');
});

//print response route
app.get("/print/:ticketKey", function (req, res) {
	res.send(req.params.ticketKey);
	
	//print the label
	printTicket.printTicket(req.params.ticketKey);
});

//start server on port
app.listen(port, function () {
	console.log(`printLabelExpress running on port ${port}!`);
});