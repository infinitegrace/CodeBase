


const character = "#";
const count = 20;
let rows =[];


//Lets define a function that will carry our pyramid argorithm
function pyramidRow(rowNumber, maxRow){
	return " ".repeat(maxRow - rowNumber) + character.repeat(2 * rowNumber - 1) + " ".repeat(maxRow - rowNumber);
}

for(let i = 0; i < count; i++){

	rows.push(pyramidRow(i +1, count));
}

let pyramid ="";
for(item of rows){
	pyramid += "\n" + item;
}
console.log(pyramid);
