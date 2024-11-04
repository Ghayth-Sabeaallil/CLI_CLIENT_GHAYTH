import { signupQestion } from "./data.js";
import { main } from "./index.js";
import chalk from "chalk";
import inquirer from "inquirer";

export async function signup() {
  inquirer.prompt(signupQestion).then((answers) => {
    postSignup(
      answers.name,
      answers.email,
      answers.username,
      answers.birthday,
      answers.password
    );
  });
}

async function postSignup(name, email, username, birthday, password) {
  const encoder = new TextEncoder();
  const data = encoder.encode(password);
  const hashBuffer = await crypto.subtle.digest("SHA-256", data);
  let hashPass = Array.from(new Uint8Array(hashBuffer))
    .map((b) => b.toString(16).padStart(2, "0"))
    .join("");
  fetch("http://localhost:3000/api/users", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      fName: name,
      username: username,
      email: email,
      birthday: birthday,
      password: hashPass,
    }),
  }).then((response) => {
    if (response.ok) {
      console.log(chalk.green(`Signup Seccesfully!`));
      main();
    } else {
      console.log(chalk.red(`Something went wrong, try again!`));
      main();
    }
  });
}
