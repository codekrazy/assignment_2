var fs = require('fs');
var fileName = "testdocument.txt";
var randomWords = require("random-words");

var myWords = randomWords({ min: 3, max:5});
console.log("WORDS: " + myWords)

fs.appendFile(fileName, myWords + "\n", DoneWritingToFile); 
 
function DoneWritingToFile() {
  console.log("File " + fileName + " has text \"" + myWords + "\" appended");
  //console.log("Done writing to file");
  ReadNumLinesInFile();
};

function ReadNumLinesInFile() {
  fs.readFile(fileName, 'utf8', function(err, theContentsOfMyFile) {
 	//console.log("Contents of my file: " + data);
 	var arrayOfFileStuff = theContentsOfMyFile.split(",");
 	console.log("MY ARRAY: " + arrayOfFileStuff);
 	console.log("Array size: " + arrayOfFileStuff.length);
  	//console.log("number of words " + data.split("\n").length) 
  });

}