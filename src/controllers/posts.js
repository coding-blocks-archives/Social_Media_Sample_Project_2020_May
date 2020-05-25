const { Posts, Users, Comments } = require("../db/models");

async function createNewPost(userId, title, body) {
  return await Posts.create({
    title,
    body,
    userId,
  });
}

async function findAllPosts(query) {
  let where = {};
  if (query.userId) {
    where.userId = query.userId;
  }

  return await Posts.findAll({
    include: [Users, Comments],
    where,
  });
}

module.exports = {
  createNewPost,
  findAllPosts,
};
