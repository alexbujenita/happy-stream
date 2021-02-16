const populateCsv = require("./populate-csv");
const retrievePartyPeople = require("./retrieve-party-people");

const option = process.argv[2];

if (!option)
  throw new Error(
    "Please provide -p to populate the CSV file or -r to run the process"
  );

switch (option) {
  case "-p":
    populateCsv();
    break;

  case "-r":
    retrievePartyPeople();
    break;

  default:
    throw new Error(
      "Please provide -p to populate the CSV file or -r to run the process"
    );
}
