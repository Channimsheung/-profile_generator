const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("What's your name? Nicknames are also acceptable :) ", answer => {
  //console.log(`Thank you for your valuable feedback: ${answer}`);

  rl.question("What's an activity you like doing?", answer => {
    console.log(`That's interesting that you like ${answer}`);

    rl.question("What do you listen to while doing that?", answer => {
      console.log(`${answer} must be a very nice song`);

      rl.question(
        "Which meal is your favourite (eg: dinner, brunch, etc.)",
        answer => {
          console.log(`It's my favourite too!`);

          rl.question(
            "What's your favourite thing to eat for that meal?",
            answer => {
              console.log(`I see`);

              rl.question("Which sport is your absolute favourite?", answer => {
                rl.question(
                  "What is your superpower? In a few words, tell us what you are amazing at!",
                  answer => {
                    console.log(`Thanks for your feedback!`);

                    rl.close();
                  }
                );
              });
            }
          );
        }
      );
    });
  });
});
