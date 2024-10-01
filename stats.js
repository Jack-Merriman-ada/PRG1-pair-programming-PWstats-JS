const fs = require("fs");

const inputFile = "10000-most-common-passwords.csv";
const outputFile = "statistics.csv";
const delimiter = ",";

function deleteExistingOutputFile() {
  if (fs.existsSync(outputFile)) {
    fs.unlinkSync(outputFile);
  }
}


function processData() {
  const data = fs.readFileSync(inputFile, "utf-8");
  // console.log(data)
  const lines = data.split(/\n/);

  const newObject = {}

  for (const line of lines) { // loop through each line in lines
    let elements = line.split(delimiter); //split line into an array called elements
    const passwordLength = elements[1].length // access the password in line and return its length

    if (newObject[`${passwordLength} chars long`]) { // checks new object for key
      newObject[`${passwordLength} chars long`] += 1 // if key exists, increases value by one
    } else {
      newObject[`${passwordLength} chars long`] = 1 // else creates key and value 
    }
  }

  console.log(newObject)
}























// Main execution
// deleteExistingOutputFile(); 
processData();
