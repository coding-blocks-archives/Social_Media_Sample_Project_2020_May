const route = require("express").Router();
const { createComment } = require("../../controllers/comments");

route.post("/", async (req, res) => {
  try {
    let { user_id, post_id, comment_body } = req.body;
    if (!user_id || !post_id || !comment_body) {
      res.status(403).send("Bad Request");
    } else {
      console.log("going to create comment");
      console.log(user_id, post_id, comment_body);

      let comment = await createComment(user_id, post_id, comment_body);

      if (comment) {
        res.status(201).send(comment);
      } else {
        res.status(501).send("please try again...not created yet");
      }
    }
  } catch (e) {
    res.status(501).send(e);
  }
});

route.get("/:post_id", async (req, res) => {
  try {
    let allComments = await Comments.findAll({
      where: {
        postId: req.params.post_id,
      },
    });
    res.status(200).send(allComments);
  } catch (e) {
    console.log(e);
    res.status(404).send("Not Found");
  }
});

module.exports = {
  commentsRoute: route,
};
