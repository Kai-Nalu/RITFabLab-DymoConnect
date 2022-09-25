exports.ticketLabelTemplate = function (ticketKey, ticketName, ticketReporter, ticketBirthday, ticketCopies) {	
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
					<Text>Copies:</Text>
					<FontInfo>
					  <FontName>Segoe UI</FontName>
					  <FontSize>10</FontSize>
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
				  <Y>0.8500015</Y>
				</DYMOPoint>
				<Size>
				  <Width>0.5060458</Width>
				  <Height>0.2066651</Height>
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
					<Text>Date Submitted</Text>
					<FontInfo>
					  <FontName>Segoe UI</FontName>
					  <FontSize>10</FontSize>
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
				  <TextSpan>
					<Text>:</Text>
					<FontInfo>
					  <FontName>Segoe UI</FontName>
					  <FontSize>10</FontSize>
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
				  <X>1.127092</X>
				  <Y>0.8500015</Y>
				</DYMOPoint>
				<Size>
				  <Width>1.112821</Width>
				  <Height>0.2066651</Height>
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
					<Text>${ticketCopies}</Text>
					<FontInfo>
					  <FontName>Segoe UI</FontName>
					  <FontSize>10</FontSize>
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
				  <X>0.7460458</X>
				  <Y>0.8500016</Y>
				</DYMOPoint>
				<Size>
				  <Width>0.3784423</Width>
				  <Height>0.206665</Height>
				</Size>
			  </ObjectLayout>
			</TextObject>
			<TextObject>
			  <Name>ITextObject3</Name>
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
					<Text>${ticketBirthday}</Text>
					<FontInfo>
					  <FontName>Segoe UI</FontName>
					  <FontSize>10</FontSize>
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
				  <X>2.239913</X>
				  <Y>0.8700016</Y>
				</DYMOPoint>
				<Size>
				  <Width>1.195714</Width>
				  <Height>0.1866651</Height>
				</Size>
			  </ObjectLayout>
			</TextObject>
			<TextObject>
			  <Name>ITextObject4</Name>
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
					<Text>C</Text>
					<FontInfo>
					  <FontName>Segoe UI</FontName>
					  <FontSize>10</FontSize>
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
				  <TextSpan>
					<Text>ustomer</Text>
					<FontInfo>
					  <FontName>Segoe UI</FontName>
					  <FontSize>10</FontSize>
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
				  <TextSpan>
					<Text>:</Text>
					<FontInfo>
					  <FontName>Segoe UI</FontName>
					  <FontSize>10</FontSize>
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
				  <Y>0.6433362</Y>
				</DYMOPoint>
				<Size>
				  <Width>0.6831325</Width>
				  <Height>0.2066651</Height>
				</Size>
			  </ObjectLayout>
			</TextObject>
			<TextObject>
			  <Name>ITextObject5</Name>
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
			  <FitMode>AlwaysFit</FitMode>
			  <IsVertical>False</IsVertical>
			  <FormattedText>
				<FitMode>AlwaysFit</FitMode>
				<HorizontalAlignment>Left</HorizontalAlignment>
				<VerticalAlignment>Middle</VerticalAlignment>
				<IsVertical>False</IsVertical>
				<LineTextSpan>
				  <TextSpan>
					<Text>${ticketReporter}</Text>
					<FontInfo>
					  <FontName>Segoe UI</FontName>
					  <FontSize>7.7</FontSize>
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
				  <X>0.9131325</X>
				  <Y>0.6633366</Y>
				</DYMOPoint>
				<Size>
				  <Width>0.8393798</Width>
				  <Height>0.206665</Height>
				</Size>
			  </ObjectLayout>
			</TextObject>
			<TextObject>
			  <Name>ITextObject6</Name>
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
					<Text>Name</Text>
					<FontInfo>
					  <FontName>Segoe UI</FontName>
					  <FontSize>10</FontSize>
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
				  <TextSpan>
					<Text>:</Text>
					<FontInfo>
					  <FontName>Segoe UI</FontName>
					  <FontSize>10</FontSize>
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
				  <X>1.752512</X>
				  <Y>0.6633366</Y>
				</DYMOPoint>
				<Size>
				  <Width>0.4487597</Width>
				  <Height>0.2066651</Height>
				</Size>
			  </ObjectLayout>
			</TextObject>
			<TextObject>
			  <Name>ITextObject7</Name>
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
			  <FitMode>AlwaysFit</FitMode>
			  <IsVertical>False</IsVertical>
			  <FormattedText>
				<FitMode>AlwaysFit</FitMode>
				<HorizontalAlignment>Left</HorizontalAlignment>
				<VerticalAlignment>Middle</VerticalAlignment>
				<IsVertical>False</IsVertical>
				<LineTextSpan>
				  <TextSpan>
					<Text>${ticketName}</Text>
					<FontInfo>
					  <FontName>Segoe UI</FontName>
					  <FontSize>7.7</FontSize>
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
				  <X>2.239913</X>
				  <Y>0.6633368</Y>
				</DYMOPoint>
				<Size>
				  <Width>1.199068</Width>
				  <Height>0.206665</Height>
				</Size>
			  </ObjectLayout>
			</TextObject>
			<TextObject>
			  <Name>ITextObject8</Name>
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
					  <FontSize>29.6</FontSize>
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
				  <X>0.23</X>
				  <Y>0.07000001</Y>
				</DYMOPoint>
				<Size>
				  <Width>3.208982</Width>
				  <Height>0.5478125</Height>
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
    return labelXml;
}