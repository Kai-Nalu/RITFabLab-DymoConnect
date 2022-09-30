exports.printTicket = function (passedTicketKey) {
	
	//dymojs setup
	const Dymo = require('dymojs'),
		   dymo = new Dymo();
	
	//report dymo statuses
	let dymoStatus = dymo.getStatus();
	dymoStatus.then(function(result) {
		//console.log(result);
	});
	
	//xml2js setup
	const xml2js = require('xml2js');
	const parser = new xml2js.Parser({ attrkey: "ATTR" });
	
	//get ticket info
	const jiraHandler = require("./jiraHandler");
	jiraHandler.jiraHandler(passedTicketKey).then(function(result) {
	
		const ticketInfo = result;
		
		//make label image
		const makeLabelImage = require("./makeLabelImage");
		const labelImage = makeLabelImage.makeLabelImage(ticketInfo.key, ticketInfo.name, ticketInfo.reporter, ticketInfo.birthday, ticketInfo.copies);
		
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
					//console.log(JSON.stringify(jsonPrinters));
					
					let currentPrinter = jsonPrinters.Printers.LabelWriterPrinter[0].Name[0];
					//console.log(currentPrinter);
					
					//print label
					//console.log(labelXml);
					dymo.print(currentPrinter, labelXml);
					console.log(`Fulfilled ticket ${passedTicketKey}\n`);
				}
				else {
					console.log(error);
				}
			});
		});
	});
	
	return null;
};