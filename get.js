import { eventsList, eventOptions } from "./data.js";
import { main } from "./index.js";
import { getEvent } from "./getEvent.js";
import inquirer from "inquirer";
import { session } from "./data.js";

export async function get() {
  try {
    const response = await fetch("http://localhost:3000/api/events/public");
    const data = await response.json();
    data.map((event) => {
      eventsList.push({ name: event.name, value: event._id });
    });
    eventsList.push("<< Back");
    eventsList.push(new inquirer.Separator("-- End of List --"));
    askToSelectEvent();
  } catch (error) {
    console.error(error.message);
    main();
  }
}

export function askToSelectEvent() {
  inquirer.prompt(eventOptions).then((answers) => {
    if (answers.choice === "<< Back") {
      session.shift();
      main();
    } else {
      getEvent(answers.choice);
    }
  });
}
