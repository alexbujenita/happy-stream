/**
 * The main function that will format the text and send an email
 * A different but similar function will do the same if we want to sent the greeting via different media (voice message, SMS, whatsapp etc.)
 * Or this could be just a simple formatter that will then call the needed function to deliver the message
 * @param {Array<Objects>} people 
 */
module.exports = (people) => {
  if (!people.length) {
    console.log("It's no ones birthday today!");
  } else {
    for (const person of people) {
      const { first_name, email } = person;
      console.log("To: " + email);
      console.log("Subject: Happy birthday!\n");
      console.log(`Happy birthday, dear ${first_name}!`);
      console.log("-".repeat(30));
    }
  }
};
