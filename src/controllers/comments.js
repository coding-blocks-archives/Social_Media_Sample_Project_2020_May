const { Posts, Users, Comments } = require('../db/models')

async function createNewComment(title, body, userId, postId) {
    const Comment = await Comments.create({
      title,
      body,
      userId,
      postId
    })
  
    return Comment
  }


  async function showAllComments(query) {

    //let postId = query.postId
    let where = {}
    if (query.postId) { where.postId = query.postId }
    
    const comment = await Comments.findAll({
      include: [ Users ],
      where
    })
    return comment
  }

 /*  async function showCommentsPost(Id){
      const commentsPost = await Comments.findAll({
          where: {postId:Id},
          include: [Users,Posts]
      })
      return commentsPost
  } */

  module.exports = {
      createNewComment,
      showAllComments
  }