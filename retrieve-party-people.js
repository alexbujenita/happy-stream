const fs = require("fs");
const { pipeline } = require("stream");
const csv = require("csv-parser");
const sendEmail = require("./send-email");

module.exports = () => {
  const todayMonthDay = `${new Date().getMonth() + 1}/${new Date().getDate()}`;
  const todayBirthdays = [];

  const parser = csv().on("data", (entry) => {
    if (entry.date_of_birth.substring(5) === todayMonthDay) {
      todayBirthdays.push(entry);
    }
  });

  parser.on("end", () => {
    sendEmail(todayBirthdays);
  });

  return pipeline(fs.createReadStream("./test.csv"), parser, (err) => {
    if (err) {
      console.error("failed ", err);
    } else {
      console.log("Success");
    }
  });
};
