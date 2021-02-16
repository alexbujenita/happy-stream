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
