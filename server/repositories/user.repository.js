const { Users } = require("../models");

module.exports.getUserById = async (id) => {
  try {
    const user = await Users.findOne({
      where: { uuid: id },
    });
    return user;
  } catch (error) {
    throw error;
  }
};
module.exports.getUserByEmail = async (email) => {
  try {
    const user = await Users.findOne({
      where: { email },
    });
    return user;
  } catch (error) {
    throw error;
  }
};
module.exports.getUserByRefreshToken = async (token) => {
  try {
    const user = await Users.findOne({
      where: { refreshToken: token },
    });
    return user;
  } catch (error) {
    throw error;
  }
};
