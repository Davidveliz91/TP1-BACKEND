import { existsSync, readFileSync, writeFileSync } from "node:fs";
import { randomUUID, createHash } from "node:crypto";
import { handleError } from "./utils/handleError.js";
import dotenv from 'dotenv';

dotenv.config();

const PATH_FILE_USER = process.env.PATH_FILE_USER;
const PATH_FILE_ERROR = process.env.PATH_FILE_ERROR;

const getUsers = (urlfile) => {
    try {
        if (!urlfile) {
            throw new Error("Access denied")
        }
        const exists = existsSync(PATH_FILE_USER);
        if (!exists) {
            writeFileSync(PATH_FILE_USER, JSON.stringify([]));
            return [];
        }
        const users = JSON.parse(readFileSync(PATH_FILE_USER));
        return users;
    } catch (error) {
        const objError = handleError(error, PATH_FILE_ERROR);
        return objError;
    }
};

const getUserById = (id) => {
    try {
        if (!id) {
            throw new Error("ID is missing");
        }
        const users = getUsers(PATH_FILE_USER);
        const user = users.find(user => user.id === id);

        if (!user) {
            throw new Error("User not found");
        }
        return user;
    } catch (error) {
        const objError = handleError(error, PATH_FILE_ERROR);
        return objError;
    }
};

const addUser = (user) => {
    try {
        const { name, lastName, email, password } = user;

        if (!name || !lastName || !email || !password) {
            throw new Error("Missing data");
        }

        const hashedPassword = createHash("sha256").update(password).digest("hex");

        const newUser = {
            id: randomUUID(),
            name,
            lastName,
            email,
            password: hashedPassword,
            isLoggedIn: false,
        };

        const users = getUsers(PATH_FILE_USER);

        if (users.find(u => u.email === email)) {
            throw new Error("User with this email already exists");
        };
        users.push(newUser);
        writeFileSync(PATH_FILE_USER, JSON.stringify(users));
        return newUser;

    } catch (error) {
        const objError = handleError(error, PATH_FILE_ERROR);
        return objError;
    }
};

const updateUser = (id, dataUser) => {
    try {
        const { name, lastName, email, password } = dataUser;

        if (!id) {
            throw new Error("ID is missing");
        }

        const users = getUsers(PATH_FILE_USER);
        const user = getUserById(id);

        if (!user) {
            throw new Error("User not found");
        }

        if (name) user.name = name;
        if (lastName) user.lastName = lastName;
        if (email) user.email = email;
        if (password) user.password = password;

        const userIndex = users.findIndex(u => u.id === id);
        if (userIndex !== -1) {
            users[userIndex] = user;
        }

        writeFileSync(PATH_FILE_USER, JSON.stringify(users));
        return user;
    } catch (error) {
        const objError = handleError(error, PATH_FILE_ERROR);
        return objError;
    }
};

const userToUpdate = {
    id: "11b8285f-a153-411c-850f-d37b20546386",
    name: "PRUEBA",
    lastName: "PEREZ",
    email: "claudioveliz@example.com",
    password: "David123"
}

const deleteUser = (id) => {
    try {
        if (!id) {
            throw new Error("ID is missing");
        }
        const users = getUsers(PATH_FILE_USER);
        const user = getUserById(id);

        const newUsers = users.filter((user) => user.id !== id);
        writeFileSync(PATH_FILE_USER, JSON.stringify(newUsers));

        return user;

    } catch (error) {
        const objError = handleError(error, PATH_FILE_ERROR);
        return objError;
    }
};
export { getUsers, getUserById, addUser, updateUser, deleteUser };