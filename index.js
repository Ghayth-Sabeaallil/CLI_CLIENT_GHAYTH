#!/usr/bin/env node

import inquirer from "inquirer";
import chalk from "chalk";
import { sign } from "./data.js";
import { login } from "./login.js";
import { signup } from "./signup.js";

export function main() {
  inquirer.prompt(sign).then((answers) => {
    if (answers.choice == "> Login") {
      login();
    } else if (answers.choice == "< SignUp") {
      signup();
    } else if (answers.choice == "< EXIT") {
      console.log(chalk.red("BYE BYE"));
    }
  });
}

main();
