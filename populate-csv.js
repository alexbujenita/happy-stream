const createCsvWriter = require("csv-writer").createObjectCsvWriter;
const faker = require("faker");
module.exports = () => {

const entries = [];

for (let i = 0; i < 2500; i++) {
  const lastName = faker.name.lastName();
  const firstName = faker.name.firstName();
  const date = faker.date.between("1990-01-01", "1990-12-31");
  entries.push({
    last_name: lastName,
    first_name: firstName,
    date_of_birth: `${date.getFullYear()}/${
      date.getMonth() + 1
    }/${date.getDate()}`,
    email: `${firstName}.${lastName}@random.abc`,
  });
}

const csvWriter = createCsvWriter({
  path: "./test.csv",
  header: [
    { id: "last_name", title: "last_name" },
    { id: "first_name", title: "first_name" },
    { id: "date_of_birth", title: "date_of_birth" },
    { id: "email", title: "email" },
  ],
});

csvWriter
  .writeRecords(entries)
  .then(() => {
    console.log("...Done");
  });
}