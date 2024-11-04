import { loginInput, session } from "./data.js";
import { main } from "./index.js";
import { get } from "./get.js";
import chalk from "chalk";
import inquirer from "inquirer";

export async function login() {
  inquirer.prompt(loginInput).then((answers) => {
    postLogin(answers.username, answers.password);
  });
}

async function postLogin(username, password) {
  const encoder = new TextEncoder();
  const data = encoder.encode(password);
  const hashBuffer = await crypto.subtle.digest("SHA-256", data);
  let hashPass = Array.from(new Uint8Array(hashBuffer))
    .map((b) => b.toString(16).padStart(2, "0"))
    .join("");
  fetch("http://localhost:3000/api/users/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      username: username,
      password: hashPass,
    }),
  }).then((response) => {
    if (response.status == 200) {
      console.log(chalk.green(`Login Seccesfully!`));
      session.push(username);
      get();
    } else {
      console.log(chalk.red(`Something went wrong, try again!`));
      main();
    }
  });
}
