const readlineSync = require("readline-sync");

/*let series  = {
	"name":"",
	"prodyear":"",
	"cast" : [],
};*/
/*let anymore = "yes";

console.clear();
console.log("Ejercicio 5.1");
console.log("Hello!");
series.name=readlineSync.question("Type the name of your favourite tv series?");
series.prodyear=readlineSync.question("When was it released?");
series.cast.push(readlineSync.question("Enter the name of a cast member"));
anymore=readlineSync.question("Is there any more members you want to encode? <yes - no> ");
while (anymore != "no"){
	series.cast.push(readlineSync.question("Enter the name of a cast member"));
	anymore=readlineSync.question("Is there any more members you want to encode? <yes - no> ");
}*/
function askTvSerie ()
{	
	let series  = {
		"name":"",
		"prodyear":"",
		"cast" : [],
	};
	series.name=readlineSync.question("Type the name of your favourite tv series?");	
	series.prodyear=readlineSync.question("When was it released?");
	series.cast.push(readlineSync.question("Enter the name of a cast member"));
	let anymore = "yes";
	anymore=readlineSync.question("Is there any more members you want to encode? <yes - no> ");
	while (anymore != "no")
	{
		series.cast.push(readlineSync.question("Enter the name of a cast member"));
		anymore=readlineSync.question("Is there any more members you want to encode? <yes - no> ");
	}
	return series;
}
askTvSerie();
//console.log(series.name);
//console.log(series.prodyear);
//console.log(series.cast);
console.log(series);

