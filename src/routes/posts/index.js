const { Router } = require('express')
const {
  findAllPosts,
  createNewPost,
  showpostbypostid
} = require('../../controllers/posts')

const route = Router()

route.get("/:id",async(req,res)=>{
  let post;
  if(isNaN(parseInt(req.params.id)))
  {
      post=await showpostsbykeyword(req.params.id);
  }
  else
  {
      post=await showpostbypostid(req.params.id);
  }
 
  res.send(post);
})

route.get('/', async (req, res) => {
  const posts = await findAllPosts(req.query)
  
  res.status(200).send(posts)
})

route.post('/', async (req, res) => {
  console.log(`POST /api/posts`, req.body)
  
  const { userId, title, body } = req.body
  
  if ((!userId) || (!title) || (!body)) {
    return res.status(400).send({
      error: 'Need userid, title and body to create post'
    })
  }

  const post = await createNewPost(userId, title, body)
  res.status(201).send(post)
})


module.exports = {
  postsRoute: route
}