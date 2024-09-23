import { existsSync, readFileSync, writeFileSync } from "node:fs";
import {randomUUID} from "node:crypto";
//avergiuar que importar de node el hash
//averiguar como "activar" la lectura de variables de entorno del archivo.env (dotenv)
import {handleError} from ".utils/handleError.js";

//1° recuperar variables de entorno
//2°declarar los metodos

const getUsers = () => {
    try{

    } catch (error) {
        const objError = handleError ()
        return objError

    }
};

const getUserById = (id) => {
    try{

    } catch (error) {

    }
};

//addUser recibe un objeto con toda la data para el nuevo usuario
//Valida que esten los datos minimos para añadir un nuevo usuario
//valida que el nombre sea un string
//valida que el email sea un string y que no se repita
//hashea la contraseña antes de registrar al usuario
const addUser = (userData) => {
    try{

    } catch (error) {

    }
};

//todos los datos del usuario seleccionado se podrian modificar, menos el ID
//si se modifica la pass deberia ser nuevamente hasheada
//si se modifica el mail, validar que este no exista
const updateUser = (userData) => {
    try{

    } catch (error) {

    }
};

const deleteUser = (id) => {
    try{

    } catch (error) {

    }
};

export {getUsers, getUserById, addUser, updateUser, deleteUser}; 