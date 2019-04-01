const actions = require("../actions");

const signup = async (_, args, context, info) => {

  return actions
    .signup(args.data)
    .then(token => {
      return { message: "Usuario creado exitosamente, token:", token: token };
    })
    .catch(e => e);
};

const login = (_, args, context, info) => {
  return actions
    .login(args)
    .then(token => {
      return { message: "Usuario logado exitosamente", token };
    })
    .catch(e => e);
};
module.exports = {
  signup,
  login,
};
