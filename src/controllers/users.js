const { Users } = require("../db/models");
const { genRandomUsername } = require("../utils/username");

async function createAnonUser() {
  return await Users.create({
    username: genRandomUsername(),
  });
}

async function getUserById(id) {
  if (!id) throw new Error("user id not provided");
  if (typeof id !== "number") throw new Error("user id should be integer");

  return await Users.findOne({ where: { id } });
}

async function getUserByUsername(username) {
  return await Users.findOne({ where: { username } });
}

module.exports = {
  createAnonUser,
  getUserById,
  getUserByUsername,
};
