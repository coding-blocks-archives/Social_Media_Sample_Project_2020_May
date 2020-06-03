const {expect}=require('chai')
const {
    createNewPost,
  findAllPosts
}=require('../../src/controllers/posts')

describe('controllers/posts', ()=>{
    let testingPost = null

    it('should create post with userId, title and body assigned', async ()=>{
        testingPost = await createNewPost(1, 'Coder', 'Arnav Bhaiya')
        expect(testingPost.userId).to.equal(1)
        expect(testingPost.title).to.equal('Coder')
        expect(testingPost.body).to.equal('Arnav Bhaiya')
    } )

    it('should find all posts', async ()=>{
        let where ={}
        let allPosts = await findAllPosts(where)
        expect(allPosts).to.be.an("array")  
      })

    it('should find all posts of a user by its userid', async ()=>{
        let where ={
            userId: 1
        }
        let allPosts = await findAllPosts(where)
        expect(allPosts).to.be.an("array")
    })
})