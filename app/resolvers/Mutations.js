const actions = require("../actions");
//En Mutations se agregan todas las acciones
const signup = async (_, args, context, info) => {
    return actions
    .signup(args.data)
    .then(token => {
      return { message: "Usuario creado exitosamente, token:", token: token };
    })
    .catch(e => e);
};


module.exports = {
  signup,
};
