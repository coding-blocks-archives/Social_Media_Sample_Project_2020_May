const {expect}=require('chai')
const {
    createNewPost,
  findAllPosts
}=require('../../src/controllers/posts')

describe('controllers/posts', ()=>{
    let testingPost = null

    it('should create post with userId, title and body assigned', async ()=>{
        testingPost = await createNewPost(1, 'Ultimate Coder', 'Arnav Bhaiya')
        expect(testingPost).to.have.property('title')
        expect(testingPost).to.have.property('userId')
        expect(testingPost).to.have.property('body')
        expect(testingPost.id).to.be.a('number')
        expect(testingPost.userId).to.be.a('number')
        expect(testingPost.title).to.be.a('string')
        expect(testingPost.body).to.be.a('string')
        expect(testingPost.userId).to.equal(1)
        expect(testingPost.title).to.equal('Ultimate Coder')
        expect(testingPost.body).to.equal('Arnav Bhaiya')
    } )

    it('should find all posts', async ()=>{
        let where ={}
        let allPosts = await findAllPosts(where)
        expect(allPosts).to.be.an("array")  
      })

    it('should find all posts of a user by its userid', async ()=>{
        let where ={
            userId: testingPost.userId
        }
        let allPosts = await findAllPosts(where.userId)
        let postsarr = []
        for(let p of allPosts){
            postsarr.push(p)
        }
        let len=postsarr.length
        expect(postsarr[len-1].userId).to.equal(testingPost.userId)
        expect(postsarr[len-1].title).to.equal(testingPost.title)
        expect(postsarr[len-1].body).to.equal(testingPost.body)
    })
})