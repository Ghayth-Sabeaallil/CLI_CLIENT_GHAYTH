import { session } from "./data.js";
import chalk from "chalk";
import { askToSelectEvent } from "./get.js";

export async function joinDirekt(id) {
  try {
    fetch(`http://localhost:3000/api/events/join/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        attendent: session[0],
        paid: true,
      }),
    }).then(async (response) => {
      if (response) {
        console.log(chalk.green(`Joined`));
        askToSelectEvent();
      }
    });
  } catch (error) {
    console.error(error);
  }
}

export function payThenJoin(id) {
  console.log("Pay " + id);
}
/*

*/
