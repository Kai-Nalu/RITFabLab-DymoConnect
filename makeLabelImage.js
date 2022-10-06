exports.makeLabelImage = function (ticketKey, ticketName, ticketReporter, ticketBirthday, ticketCopies) {
    return new Promise (resolve => {
        const { loadImage, createCanvas } = require('canvas');
        const fs = require('fs');
        const width = 794;
        const height = 247;
        const topMargin = height*0.15;
        const canvas = createCanvas(width, height);
        const context = canvas.getContext('2d');
        //white background
        context.fillStyle = '#fff';
        context.fillRect(0, 0, width, height);
        //ticketKeyText
        const keyFontSize = 50;
        context.font = `normal ${keyFontSize}pt Trebuchet MS`;
        context.textBaseline = 'top';
        context.textAlign = 'center';
        context.fillStyle = '#000';
        context.fillText(ticketKey, width/2, topMargin, width);
        const ticketKeyTextHeight = keyFontSize*1.50;
        //reporter and name text
        const reporterLabelText = 'Customer: ';
        const nameLabelText = '   Name: ';
        context.textBaseline = 'top';
        context.textAlign = 'left';
        context.fillStyle = '#000';
        let reporterLabelWidth, nameLabelWidth, reporterWidth, nameWidth;
        let reporterNameFontSize = 31;
        let reporterNameFit = false;
        while (reporterNameFit == false) {
            reporterNameFontSize--;
            context.font = `bold ${reporterNameFontSize}pt Trebuchet MS`;
            reporterLabelWidth = context.measureText(reporterLabelText).width;
            nameLabelWidth = context.measureText(nameLabelText).width;
            context.font = `normal ${reporterNameFontSize}pt Trebuchet MS`;
            reporterWidth = context.measureText(ticketReporter).width;
            nameWidth = context.measureText(ticketName).width;
            if ((reporterLabelWidth+nameLabelWidth+reporterWidth+nameWidth)>=width) {
                reporterNameFit = false;
            } else {
                reporterNameFit = true;
            }
        }
        context.font = `bold ${reporterNameFontSize}pt Trebuchet MS`;
        context.textAlign = 'left';
        context.fillText(reporterLabelText, 0, ticketKeyTextHeight+topMargin);
        context.font = `normal ${reporterNameFontSize}pt Trebuchet MS`;
        context.textAlign = 'left';
        context.fillText(ticketReporter, reporterLabelWidth, ticketKeyTextHeight+topMargin);
        context.font = `normal ${reporterNameFontSize}pt Trebuchet MS`;
        context.textAlign = 'right';
        context.fillText(ticketName, width, ticketKeyTextHeight+topMargin);
        context.font = `bold ${reporterNameFontSize}pt Trebuchet MS`;
        context.textAlign = 'right';
        context.fillText(nameLabelText, width-nameWidth, ticketKeyTextHeight+topMargin);
        //copies and birthday text
        const copiesLabelText = 'Copies: ';
        const birthdayLabelText = '   Date Submitted: ';
        context.textBaseline = 'top';
        context.textAlign = 'left';
        context.fillStyle = '#000';
        let copiesLabelWidth, birthdayLabelWidth, copiesWidth, birthdayWidth;
        let copiesBirthdayFontSize = 31;
        let copiesBirthdayFit = false;
        while (copiesBirthdayFit == false) {
            copiesBirthdayFontSize--;
            context.font = `bold ${copiesBirthdayFontSize}pt Trebuchet MS`;
            copiesLabelWidth = context.measureText(copiesLabelText).width;
            birthdayLabelWidth = context.measureText(birthdayLabelText).width;
            context.font = `normal ${copiesBirthdayFontSize}pt Trebuchet MS`;
            copiesWidth = context.measureText(ticketCopies).width;
            birthdayWidth = context.measureText(ticketBirthday).width;
            if ((copiesLabelWidth+birthdayLabelWidth+copiesWidth+birthdayWidth)>=width) {
                copiesBirthdayFit = false;
            } else {
                copiesBirthdayFit = true;
            }
        }
        const copiesBirthdayY = ticketKeyTextHeight+(reporterNameFontSize*1.50);
        context.font = `bold ${copiesBirthdayFontSize}pt Trebuchet MS`;
        context.textAlign = 'left';
        context.fillText(copiesLabelText, 0, copiesBirthdayY+topMargin);
        context.font = `normal ${copiesBirthdayFontSize}pt Trebuchet MS`;
        context.textAlign = 'left';
        context.fillText(ticketCopies, copiesLabelWidth, copiesBirthdayY+topMargin);
        context.font = `normal ${copiesBirthdayFontSize}pt Trebuchet MS`;
        context.textAlign = 'right';
        context.fillText(ticketBirthday, width, copiesBirthdayY+topMargin);
        context.font = `bold ${copiesBirthdayFontSize}pt Trebuchet MS`;
        context.textAlign = 'right';
        context.fillText(birthdayLabelText, width-birthdayWidth, copiesBirthdayY+topMargin);
        
        const buffer = context.toBuffer('image/png');
        resolve(buffer);
    });
};