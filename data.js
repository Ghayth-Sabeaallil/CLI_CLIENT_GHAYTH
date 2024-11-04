export let eventsList = [];
export let session = [];

export const menu = [
  {
    type: "list",
    name: "choice",
    message: "Choose an option:",
    choices: [
      "Get all Public event",
      "Post an event",
      "Join an event",
      "Unjoin an event",
      "EXIT",
    ],
  },
];

export const sign = [
  {
    type: "list",
    name: "choice",
    message: "You have to Login before you continue!",
    choices: ["> Login", "< SignUp", "< EXIT"],
  },
];

export const join = [
  {
    type: "list",
    name: "choice",
    message: "Select an option?",
    choices: [">> Join", "<< EXIT"],
  },
];

export const unJoin = [
  {
    type: "list",
    name: "choice",
    message: "Select an option?",
    choices: ["<< Unjoin", "<< EXIT"],
  },
];

export const signupQestion = [
  {
    type: "input",
    name: "name",
    message: "Enter your first and last name?",
  },
  {
    type: "input",
    name: "email",
    message: "Enter your email?",
  },
  {
    type: "input",
    name: "username",
    message: "Enter your username?",
  },
  {
    type: "input",
    name: "birthday",
    message: "Enter your birthday? (YYYY-MM-DD)",
  },
  {
    type: "input",
    name: "password",
    message: "Enter your password?",
  },
];

export const loginInput = [
  {
    type: "input",
    name: "username",
    message: "Enter your username?",
  },
  {
    type: "password",
    name: "password",
    message: "Enter your password?",
  },
];

export const eventOptions = [
  {
    type: "list",
    name: "choice",
    message: "Choose an event:",
    choices: eventsList,
  },
];
