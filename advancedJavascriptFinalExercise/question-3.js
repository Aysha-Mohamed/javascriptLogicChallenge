/*Question 3: Write a function that converts HEX to RGB. 
Then Make that function auto-dect the formats so that if you enter HEX color format it returns RGB and 
if you enter RGB color format it returns HEX.*/

const hexReference = {0:0,1:1,2:2,3:3,4:4,5:5,6:6,7:7,8:8,9:9,A:10,B:11,C:12,D:13,E:14,F:15};
const conversionColor = (color) =>{
	if(color[0] === "#"){
		convertToRgb(color);
	}
	else{
		convertToHex(color);
	}
}
const toDecimal = (r,g,b) =>{
    return ([hexReference[r[0]] * 16 + hexReference[r[1]],
    		hexReference[g[0]] * 16 + hexReference[g[1]],
    		hexReference[b[0]] * 16 + hexReference[b[1]]]);

}
const convertToRgb = (color) =>{
	color = color.substr(1);
	let rgbResult = toDecimal(color.substring(0,2),color.substring(2,4),color.substring(4,6));
	console.log("rgbResult",rgbResult);
}


const convertToHex = (color) =>{
	let colorArray = color.split(",");
	let hexResult = [];
	colorArray.forEach((item,index)=>{
		hexResult.push(toHexa(item));
	})

		hexResult = "#" + hexResult.reduce((accumulator,item) => {return accumulator+item;});
		console.log("hexValue",hexResult);
}

const toHexa = (num) =>{
	let firstHex = num / 16;
	let secondHex = num % 16;
	firstHex = ~~firstHex;
	let firstHexValue;
	let secondHexValue;
	if(firstHex > 9){
		 firstHexValue = Object.keys(hexReference).find(key => hexReference[key] === firstHex );	
	}else{
		firstHexValue = firstHex;
	}
	if(secondHex > 9){
		 secondHexValue = Object.keys(hexReference).find(key => hexReference[key] === secondHex );	
	}else{
		secondHexValue = secondHex;
	}
	return ("" + firstHexValue + secondHexValue);
}

conversionColor("#DA70D6");
conversionColor("220,20,60");