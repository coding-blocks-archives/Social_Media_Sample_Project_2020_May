const {expect}=require('chai')
const {
    createNewPost,
  findAllPosts
}=require('../../src/controllers/posts')

describe('controllers/posts', ()=>{
    let testingPost = null

    // it('should create post with userId, title and body assigned', async ()=>{
    //     testingPost = await createNewPost(1, 'Ultimate Coder', 'Arnav Bhaiya')
    //     expect(testingPost).to.have.property('title')
    //     expect(testingPost).to.have.property('userId')
    //     expect(testingPost).to.have.property('body')
    //     expect(testingPost.userId).to.be.a('number')
    //     expect(testingPost.title).to.be.a('string')
    //     expect(testingPost.body).to.be.a('string')
    //     expect(testingPost.userId).to.equal(1)
    //     expect(testingPost.title).to.equal('Ultimate Coder')
    //     expect(testingPost.body).to.equal('Arnav Bhaiya')
    // } )

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