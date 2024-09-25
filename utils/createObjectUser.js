const createObjectUser = (args) => {
    const [name, lastName, email, password] = args.slice(1);
  
    if (!name || !lastName || !email || !password) {
        throw new Error("Missing data");
    }
  
    return {
        id: randomUUID(),
        name,
        lastName,
        email,
        password: hashedPassword,
    };
  };
  
  const createUpdateUserObject = (args) => {
    const id = args[1];
    const [name, lastName, email, password] = args.slice(2);
  
    if (!id) {
        throw new Error("ID is missing");
    }
  
    const updatedUser = {};
    if (name) updatedUser.name = name;
    if (lastName) updatedUser.lastName = lastName;
    if (email) updatedUser.email = email;
    if (password) updatedUser.password = password;
  
    updatedUser.id = id;
  
    return updatedUser;
  };

export {createUserObject, createUpdateUserObject};