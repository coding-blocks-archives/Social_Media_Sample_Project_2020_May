const { Router } = require('express')
const {
  createNewComment,
  showAllComments
} = require('../../controllers/comments')

const route = Router()

route.get('/', async (req, res)=>{
  console.log("test")
  const comments = await showAllComments(req.query)
  res.status(200).send(comments)
})

/* route.get('/post/:id', async (req, res) => {
  const comment = await showCommentsPost(req.params.id)
  res.status(400).send(comment)
}) */

route.post('/', async (req, res) => {
  const { title, body, userId, postId } = req.body

  if((!title) || (!body) || (!userId) || (!postId)){
    res.status.send({error:'title or body or userId or postId not valid'})
  }
  const newComment = await createNewComment(title,body,userId,postId)
  res.status(200).send(newComment)

})

module.exports = {
  commentsRoute: route
}