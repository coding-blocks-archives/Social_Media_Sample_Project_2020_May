const { Posts, Users, Comments } = require("../db/models");

async function createComment(user_id, post_id, comment_body) {
  let user = await Users.findOne({
    where: {
      id: user_id,
    },
  });

  return await Comments.create({
    body: comment_body,
    title: user.username,
    userId: user_id,
    postId: post_id,
  });
}
module.exports = {
  createComment,
};
