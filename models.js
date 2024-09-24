import { existsSync, readFileSync, writeFileSync } from "node:fs";
import { randomUUID } from "node:crypto";
//avergiuar que importar de node el hash
//averiguar como "activar" la lectura de variables de entorno del archivo.env (dotenv)
import { handleError } from "./utils/handleError.js";

//1° recuperar variables de entorno
//2°declarar los metodos

//const userPath = path.join("./data/user.json")

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
        return objError.type;
    }
};

/*const response = getUsers();
console.log(response);*/

const getUserById = (id) => {
    try {

    } catch (error) {

    }
};

//addUser recibe un objeto con toda la data para el nuevo usuario
//Valida que esten los datos minimos para añadir un nuevo usuario
//valida que el nombre sea un string
//valida que el email sea un string y que no se repita
//hashea la contraseña antes de registrar al usuario
const addUser = (userData) => {
    try {

    } catch (error) {

    }
};

//todos los datos del usuario seleccionado se podrian modificar, menos el ID
//si se modifica la pass deberia ser nuevamente hasheada
//si se modifica el mail, validar que este no exista
const updateUser = (userData) => {
    try {

    } catch (error) {

    }
};

const deleteUser = (id) => {
    try {

    } catch (error) {

    }
};

export { getUsers, getUserById, addUser, updateUser, deleteUser }; 