//Create a pyramid wit javascript
//we will need a variable thatholds number of rows
//#Variable for number of columns
//variable for character variable which will ser as our build block
//Create a function thwt repeats our character
//Add space to the beginning and ending of each character to be printed.

const character = "#";
let rowNumber;
let count;




function rowPrint(x, y){
	
	return " ".repeat(y - x) +  character.repeat(2 * x - 1) + " ".repeat(y - x)
}

let rows = [];
rowNumber = 10;

for(let i = 0; i < rowNumber; i++){

	let rowP = rowPrint(i + 1, rowNumber)
	rows.push(rowP)
};


let result = ""

for(item of rows){

	result += "\n" + item;
};

console.log(result);


