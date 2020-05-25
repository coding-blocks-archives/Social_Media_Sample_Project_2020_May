const { Posts, Users, Comments } = require("../db/models");

async function createComment(user_id, post_id, comment_body) {
    try {
        let user = await Users.findOne({
            where: {
                id: user_id,
            },
        });
        console.log("=============================================");
        console.log("going to create comment");
        console.log("=============================================");

        return await Comments.create({
            body: comment_body,
            title: user.username,
            userId: user_id,
            postId: post_id,
        });
    } catch (e) {
        console.log(e);
        return null;
    }
}
module.exports = {
    createComment,
};