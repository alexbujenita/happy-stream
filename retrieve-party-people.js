const fs = require("fs");
const { pipeline } = require("stream");
const csv = require("csv-parser");
const sendEmail = require("./send-email");

/**
 * This is the main logic to retrieve the people, select them based on their DOB and call a funtion
 * to further process them (sending them a greeting in this case)
 * Could ideally receive a handler function to be used on the 'end' event, like sendEmail, sendSMS etc.
 * 
 * A similar function will be used if the data needs retrieval from a DB
 * Either with raw SQL -> SELECT name,dob FROM people WHERE condition
 * or with an ORM -> People.findAll({dob: date})
 * 
 * and then call the handler function.
 */
module.exports = () => {
  const todayMonthDay = `${new Date().getMonth() + 1}/${new Date().getDate()}`;
  const todayBirthdays = [];

  const parser = csv().on("data", (entry) => {
    const dob =
      entry.date_of_birth.substring(5) === "2/29"
        ? "2/28"
        : entry.date_of_birth.substring(5);
    if (dob === todayMonthDay) {
      todayBirthdays.push(entry);
    }
  });

  parser.on("end", () => {
    sendEmail(todayBirthdays);
  });

  pipeline(fs.createReadStream("./test.csv"), parser, (err) => {
    if (err) {
      console.error("failed ", err);
    } else {
      console.log("Success");
    }
  });
};
