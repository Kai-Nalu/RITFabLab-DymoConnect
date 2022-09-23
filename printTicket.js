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
	
	//get list of connected printers then proceed
	let dymoPrinters = dymo.getPrinters();
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
	});
	
	//create label xml
	const labelXml =
	`<?xml version="1.0" encoding="utf-8"?>
	<DesktopLabel Version="1">
	  <DYMOLabel Version="3">
		<Description>DYMO Label</Description>
		<Orientation>Landscape</Orientation>
		<LabelName>Address30251</LabelName>
		<InitialLength>0</InitialLength>
		<BorderStyle>SolidLine</BorderStyle>
		<DYMORect>
		  <DYMOPoint>
			<X>0.23</X>
			<Y>0.06</Y>
		  </DYMOPoint>
		  <Size>
			<Width>3.21</Width>
			<Height>0.9966666</Height>
		  </Size>
		</DYMORect>
		<BorderColor>
		  <SolidColorBrush>
			<Color A="1" R="0" G="0" B="0"></Color>
		  </SolidColorBrush>
		</BorderColor>
		<BorderThickness>1</BorderThickness>
		<Show_Border>False</Show_Border>
		<DynamicLayoutManager>
		  <RotationBehavior>ClearObjects</RotationBehavior>
		  <LabelObjects>
			<TextObject>
			  <Name>ITextObject0</Name>
			  <Brushes>
				<BackgroundBrush>
				  <SolidColorBrush>
					<Color A="0" R="0" G="0" B="0"></Color>
				  </SolidColorBrush>
				</BackgroundBrush>
				<BorderBrush>
				  <SolidColorBrush>
					<Color A="1" R="0" G="0" B="0"></Color>
				  </SolidColorBrush>
				</BorderBrush>
				<StrokeBrush>
				  <SolidColorBrush>
					<Color A="1" R="0" G="0" B="0"></Color>
				  </SolidColorBrush>
				</StrokeBrush>
				<FillBrush>
				  <SolidColorBrush>
					<Color A="0" R="0" G="0" B="0"></Color>
				  </SolidColorBrush>
				</FillBrush>
			  </Brushes>
			  <Rotation>Rotation0</Rotation>
			  <OutlineThickness>1</OutlineThickness>
			  <IsOutlined>False</IsOutlined>
			  <BorderStyle>SolidLine</BorderStyle>
			  <Margin>
				<DYMOThickness Left="0" Top="0" Right="0" Bottom="0" />
			  </Margin>
			  <HorizontalAlignment>Center</HorizontalAlignment>
			  <VerticalAlignment>Middle</VerticalAlignment>
			  <FitMode>AlwaysFit</FitMode>
			  <IsVertical>False</IsVertical>
			  <FormattedText>
				<FitMode>AlwaysFit</FitMode>
				<HorizontalAlignment>Center</HorizontalAlignment>
				<VerticalAlignment>Middle</VerticalAlignment>
				<IsVertical>False</IsVertical>
				<LineTextSpan>
				  <TextSpan>
					<Text>${ticketKey}</Text>
					<FontInfo>
					  <FontName>Segoe UI</FontName>
					  <FontSize>22.9</FontSize>
					  <IsBold>False</IsBold>
					  <IsItalic>False</IsItalic>
					  <IsUnderline>False</IsUnderline>
					  <FontBrush>
						<SolidColorBrush>
						  <Color A="1" R="0" G="0" B="0"></Color>
						</SolidColorBrush>
					  </FontBrush>
					</FontInfo>
				  </TextSpan>
				</LineTextSpan>
			  </FormattedText>
			  <ObjectLayout>
				<DYMOPoint>
				  <X>0.8472365</X>
				  <Y>0.06</Y>
				</DYMOPoint>
				<Size>
				  <Width>1.805527</Width>
				  <Height>0.4983333</Height>
				</Size>
			  </ObjectLayout>
			</TextObject>
			<TextObject>
			  <Name>ITextObject1</Name>
			  <Brushes>
				<BackgroundBrush>
				  <SolidColorBrush>
					<Color A="0" R="0" G="0" B="0"></Color>
				  </SolidColorBrush>
				</BackgroundBrush>
				<BorderBrush>
				  <SolidColorBrush>
					<Color A="1" R="0" G="0" B="0"></Color>
				  </SolidColorBrush>
				</BorderBrush>
				<StrokeBrush>
				  <SolidColorBrush>
					<Color A="1" R="0" G="0" B="0"></Color>
				  </SolidColorBrush>
				</StrokeBrush>
				<FillBrush>
				  <SolidColorBrush>
					<Color A="0" R="0" G="0" B="0"></Color>
				  </SolidColorBrush>
				</FillBrush>
			  </Brushes>
			  <Rotation>Rotation0</Rotation>
			  <OutlineThickness>1</OutlineThickness>
			  <IsOutlined>False</IsOutlined>
			  <BorderStyle>SolidLine</BorderStyle>
			  <Margin>
				<DYMOThickness Left="0" Top="0" Right="0" Bottom="0" />
			  </Margin>
			  <HorizontalAlignment>Left</HorizontalAlignment>
			  <VerticalAlignment>Middle</VerticalAlignment>
			  <FitMode>None</FitMode>
			  <IsVertical>False</IsVertical>
			  <FormattedText>
				<FitMode>None</FitMode>
				<HorizontalAlignment>Left</HorizontalAlignment>
				<VerticalAlignment>Middle</VerticalAlignment>
				<IsVertical>False</IsVertical>
				<LineTextSpan>
				  <TextSpan>
					<Text>Customer:</Text>
					<FontInfo>
					  <FontName>Segoe UI</FontName>
					  <FontSize>16.3</FontSize>
					  <IsBold>True</IsBold>
					  <IsItalic>False</IsItalic>
					  <IsUnderline>False</IsUnderline>
					  <FontBrush>
						<SolidColorBrush>
						  <Color A="1" R="0" G="0" B="0"></Color>
						</SolidColorBrush>
					  </FontBrush>
					</FontInfo>
				  </TextSpan>
				</LineTextSpan>
			  </FormattedText>
			  <ObjectLayout>
				<DYMOPoint>
				  <X>0.23</X>
				  <Y>0.5583333</Y>
				</DYMOPoint>
				<Size>
				  <Width>1.126777</Width>
				  <Height>0.4983333</Height>
				</Size>
			  </ObjectLayout>
			</TextObject>
			<TextObject>
			  <Name>ITextObject2</Name>
			  <Brushes>
				<BackgroundBrush>
				  <SolidColorBrush>
					<Color A="0" R="0" G="0" B="0"></Color>
				  </SolidColorBrush>
				</BackgroundBrush>
				<BorderBrush>
				  <SolidColorBrush>
					<Color A="1" R="0" G="0" B="0"></Color>
				  </SolidColorBrush>
				</BorderBrush>
				<StrokeBrush>
				  <SolidColorBrush>
					<Color A="1" R="0" G="0" B="0"></Color>
				  </SolidColorBrush>
				</StrokeBrush>
				<FillBrush>
				  <SolidColorBrush>
					<Color A="0" R="0" G="0" B="0"></Color>
				  </SolidColorBrush>
				</FillBrush>
			  </Brushes>
			  <Rotation>Rotation0</Rotation>
			  <OutlineThickness>1</OutlineThickness>
			  <IsOutlined>False</IsOutlined>
			  <BorderStyle>SolidLine</BorderStyle>
			  <Margin>
				<DYMOThickness Left="0" Top="0" Right="0" Bottom="0" />
			  </Margin>
			  <HorizontalAlignment>Left</HorizontalAlignment>
			  <VerticalAlignment>Middle</VerticalAlignment>
			  <FitMode>None</FitMode>
			  <IsVertical>False</IsVertical>
			  <FormattedText>
				<FitMode>None</FitMode>
				<HorizontalAlignment>Left</HorizontalAlignment>
				<VerticalAlignment>Middle</VerticalAlignment>
				<IsVertical>False</IsVertical>
				<LineTextSpan>
				  <TextSpan>
					<Text>${ticketReporter}</Text>
					<FontInfo>
					  <FontName>Segoe UI</FontName>
					  <FontSize>16</FontSize>
					  <IsBold>False</IsBold>
					  <IsItalic>False</IsItalic>
					  <IsUnderline>False</IsUnderline>
					  <FontBrush>
						<SolidColorBrush>
						  <Color A="1" R="0" G="0" B="0"></Color>
						</SolidColorBrush>
					  </FontBrush>
					</FontInfo>
				  </TextSpan>
				</LineTextSpan>
			  </FormattedText>
			  <ObjectLayout>
				<DYMOPoint>
				  <X>1.381516</X>
				  <Y>0.5583333</Y>
				</DYMOPoint>
				<Size>
				  <Width>1.970882</Width>
				  <Height>0.4983333</Height>
				</Size>
			  </ObjectLayout>
			</TextObject>
		  </LabelObjects>
		</DynamicLayoutManager>
	  </DYMOLabel>
	  <LabelApplication>Blank</LabelApplication>
	  <DataTable>
		<Columns></Columns>
		<Rows></Rows>
	  </DataTable>
	</DesktopLabel>`;
	
	return null;
};