exports.printTicket = function (ticketKey, ticketName, ticketReporter, ticketBirthday, ticketCopies) {
	//get labelXml
	const ticketLabelTemplate = require("./ticketLabelTemplate");
	let labelXml = ticketLabelTemplate.ticketLabelTemplate(ticketKey, ticketName, ticketReporter, ticketBirthday, ticketCopies);
	
	//dymojs setup
	const Dymo = require('dymojs'),
		   dymo = new Dymo();
	
	//report dymo statuses
	let dymoStatus = dymo.getStatus();
	dymoStatus.then(function(result) {
		console.log(result);
	});
	
	//xml2js setup
	const xml2js = require('xml2js');
	const parser = new xml2js.Parser({ attrkey: "ATTR" });
	
	const makeLabelImage = require("./makeLabelImage");
	makeLabelImage.makeLabelImage(ticketKey, ticketName, ticketReporter, ticketBirthday, ticketCopies);
	
	/*const fs = require('fs');
	dymo.renderLabel(labelXml).then(imageData => {
	    fs.writeFile("out.png", imageData, 'base64', (err) => {
			if (err)
				console.log(err);
			else {
				console.log("File written successfully");
    }
		});
	});*/
	
	//get list of connected printers then proceed
	/*let dymoPrinters = dymo.getPrinters();
	dymoPrinters.then(function(result) {
		console.log(result);
		let dymoPrintersXml = result;
		
		//get first printer in list then proceed
		parser.parseString(dymoPrintersXml, function(error, result) {
		    if(error === null) {
				let jsonPrinters = result;
		        console.log(JSON.stringify(jsonPrinters));
				
				let currentPrinter = jsonPrinters.Printers.LabelWriterPrinter[0].Name[0];
				console.log(currentPrinter);
				
				//print label
				dymo.print(currentPrinter, labelXml);
		    }
		    else {
		        console.log(error);
		    }
		});
	});*/
	

	
	return null;
};