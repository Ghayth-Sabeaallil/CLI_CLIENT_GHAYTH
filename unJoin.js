import { session } from "./data.js";
import chalk from "chalk";
import { askToSelectEvent } from "./get.js";

export async function UnjoinDirekt(id) {
  try {
    fetch(`http://localhost:3000/api/events/unjoin/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        attendent: session[0],
      }),
    }).then(async (response) => {
      if (response) {
        console.log(chalk.red(`UnJoined`));
        askToSelectEvent();
      }
    });
  } catch (error) {
    console.error(error);
  }
}
