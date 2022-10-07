exports.printTicket = function (passedTicketKey) {
	const PDFDocument = require('pdfkit');
	const fs = require('fs');
	const exec = require('child_process').exec;
	
	//get ticket info
	const jiraHandler = require("./jiraHandler");
	jiraHandler.jiraHandler(passedTicketKey).then(function(result) {
	
		const ticketInfo = result;
		
		//make label image
		const makeLabelImage = require("./makeLabelImage");
		makeLabelImage.makeLabelImage(ticketInfo.key, ticketInfo.name, ticketInfo.reporter, ticketInfo.birthday, ticketInfo.copies).then(function(resultImage) {
			const doc = new PDFDocument({size: [252, 81]});
			writeStream = fs.createWriteStream('ticket.pdf');
			doc.pipe(writeStream);
			doc.image(resultImage, 0, 0, {fit: [245, 81], align: 'center', valign: 'center'});
			doc.end();
			writeStream.on('finish', function(){
				exec('lp -d DYMO_LabelWriter_450 ./ticket.pdf');
			});
		});
		
		
	});
	
	return null;
};