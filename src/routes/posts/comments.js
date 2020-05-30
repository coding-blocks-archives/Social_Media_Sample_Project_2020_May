const { Router } = require('express')
const {findAllComments, createComment} = require('../../controllers/comments')

const commentsRoute = Router()
//post req router
commentsRoute.post('/', async (req,res)=>{
  // console.log(`POST /api/comments`, req.body)
  const {postId, userId, title, body} = req.body
  if(!postId || !userId ||!title ||!body){
    return res.status(400).send({
      error: 'Need userid, title and body to create post'
    })
  }
  const comment = await createComment(postId, userId, title, body)
  res.status(201).send(comment)
})
//get req router to find all comments
commentsRoute.get('/', async (req, res)=>{
  const comments = await findAllComments(req.query)
  res.status(200).send(comments)
})
//export
module.exports = {
  commentsRoute
}