import { askToSelectEvent } from "./get.js";
import inquirer from "inquirer";
import chalk from "chalk";
import { joinDirekt, payThenJoin } from "./join.js";
import { session, join, unJoin } from "./data.js";
import { UnjoinDirekt } from "./unJoin.js";

let data;
export async function getEvent(id) {
  try {
    const response = await fetch(`http://localhost:3000/api/events/${id}`);
    data = await response.json();
    console.log(chalk.green(`Name: ${data.name}`));
    console.log(chalk.yellow(`Description: ${data.description}`));
    console.log(chalk.red(`Price: ${data.price}kr`));
    console.log(chalk.blue(`Time: ${data.time}`));
    console.log(chalk.cyan(`Date: ${data.date}`));
    console.log(chalk.gray(`Location: ${data.location}`));
    if (data.invitedUser.some((e) => e.username === session[0])) {
      askToUnJoin();
    } else {
      askToJoin();
    }
  } catch (error) {
    console.error(error.message);
    askToSelectEvent();
  }
}

export function askToJoin() {
  inquirer.prompt(join).then((answers) => {
    if (answers.choice === "<< EXIT") {
      askToSelectEvent();
    } else {
      if (data.price === 0) {
        joinDirekt(data._id);
      } else {
        payThenJoin(data._id);
      }
    }
  });
}

export function askToUnJoin() {
  inquirer.prompt(unJoin).then((answers) => {
    if (answers.choice === "<< EXIT") {
      askToSelectEvent();
    } else {
      UnjoinDirekt(data._id);
    }
  });
}
