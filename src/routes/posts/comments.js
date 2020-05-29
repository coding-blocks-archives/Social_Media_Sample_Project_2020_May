const { Router } = require('express')
const {
  createNewComment,findAllCommentsbyPosts
} = require('../../controllers/comments')
const path=require('path')


const route = Router()

route.get('/:id', async (req, res) => {
  const posts = await findAllCommentsbyPosts(req.params.id)
  res.status(200).send(posts)
})

route.post('/', async (req, res) => {
  // console.log("************")
  // console.log(req.body)
  // console.log("************")
  const { postId, title, body } = req.body
  
  if ((!postId) || (!title) || (!body)) {
    return res.status(400).send({
      error: 'Need postId, title and body to create post'
    })
  }

  const post = await createNewComment(postId, title, body)
  res.status(201).send(post)
})
route.get('/:id/endpoint', async (req,res)=>{
  res.sendFile(path.join(__dirname,'../../public/components','comment.html'))
  // /media/singla/New Volume/Github Projects/Mock-Message-Site/Social-Media-Project/src
})

module.exports = {
  commentsRoute:route
}