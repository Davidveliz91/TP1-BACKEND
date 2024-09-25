import { getUsers, getUserById, addUser, updateUser, deleteUser } from "./models.js";

import dotenv from "dotenv";
import {
  createObjectUser,
  createUpdateUserObject
} from "./utils/createObjectUser.js";
import { handleError } from "./utils/handleError.js";

dotenv.config();

const args = process.argv.splice(2);
const action = args[0];

switch (action) {
  case "list":
    console.log(getUsers(process.env.PATH_FILE_USER));
    break;
  case "get":
    console.log(getUserById(args[1]));
    break;

  case "add":
    const newUser = createObjectUser(args);
    console.log(addUser(newUser));
    break;

  case "update":
    const updateUser = createUpdateUserObject(args);
    console.log(updateUser(updateUser));
    break;

  case "delete":
    console.log(deleteUser(args[1]));
    break;

  default:
    const error = handleError(
      new Error("Comand Incorrect"),
      process.env.PATH_FILE_ERROR
    );
    console.log(error);
    break;
}