const { expect } = require('chai')
const {
    createNewPost,
    findAllPosts
} = require('../../src/controllers/posts')
describe('controllers/posts', ()=>{
    let createdPost = null

    it('should create post with userId, title, body parameter', async ()=>{
        createdPost = await createNewPost(1, 'testing title', 'testing body')
        expect(createdPost).to.have.property('title')
        expect(createdPost).to.have.property('body')
        expect(createdPost.id).to.be.a('number')
        expect(createdPost.userId).to.be.a('number')
        expect(createdPost.title).to.be.a('string')
        expect(createdPost.body).to.be.a('string')
    } )

    it('should find all posts', async ()=>{
        let query ={}
        let allPosts = await findAllPosts(query)
        let arrObj = []
        for(let p of allPosts){
            arrObj.push(p)
        }
        let len=arrObj.length
        expect(arrObj[len-1].title).to.equal(createdPost.title)
        expect(arrObj[len-1].body).to.equal(createdPost.body)
    })

    it('should find all posts by userid', async ()=>{
        let query ={
            userId: createdPost.userId
        }
        let allPosts = await findAllPosts(query.userId)
        let arrObj = []
        for(let p of allPosts){
            arrObj.push(p)
        }
        let len=arrObj.length
        expect(arrObj[len-1].title).to.equal(createdPost.title)
        expect(arrObj[len-1].body).to.equal(createdPost.body)
    })
})