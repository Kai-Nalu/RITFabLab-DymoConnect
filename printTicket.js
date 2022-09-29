exports.printTicket = function (ticketKey, ticketName, ticketReporter, ticketBirthday, ticketCopies) {
	
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
	
	//make label image
	const makeLabelImage = require("./makeLabelImage");
	const labelImage = makeLabelImage.makeLabelImage(ticketKey, ticketName, ticketReporter, ticketBirthday, ticketCopies);
	
	//get labelXml
	const ticketLabelTemplate = require("./ticketLabelTemplate");
	const labelXml = ticketLabelTemplate.ticketLabelTemplate(labelImage);
	
	//get list of connected printers then proceed
	let dymoPrinters = dymo.getPrinters();
	dymoPrinters.then(function(result) {
		//console.log(result);
		let dymoPrintersXml = result;
		
		//get first printer in list then proceed
		parser.parseString(dymoPrintersXml, function(error, result) {
		    if(error === null) {
				let jsonPrinters = result;
		        console.log(JSON.stringify(jsonPrinters));
				
				let currentPrinter = jsonPrinters.Printers.LabelWriterPrinter[0].Name[0];
				console.log(currentPrinter);
				
				//print label
				//console.log(labelXml);
				dymo.print(currentPrinter, labelXml);
		    }
		    else {
		        console.log(error);
		    }
		});
	});
	
	return null;
};