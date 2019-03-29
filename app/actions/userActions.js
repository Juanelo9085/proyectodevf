const User = require("../models/Users");
const bcrypt = require("bcrypt");
const SALT_FACTOR = 10;

const createUser = data => {
  return User.create(data);
};

module.exports = {
    createUser
}