
const { Posts, Comments } = require('../db/models')

async function createNewComment(postId, title, body) {
  const comment = await Comments.create({
    title,
    body,
    postId,
  })

  return comment
}

async function findAllCommentsbyPosts(id) {
    // TODO: Handle query params
    const posts = await Posts.findAll( {
         where:{
            id
          }, include: [ Comments ]  
      }
    )
  
    return posts
  }

  module.exports = {
    createNewComment,
    findAllCommentsbyPosts
  }
    