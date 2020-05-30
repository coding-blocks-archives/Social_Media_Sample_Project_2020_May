const { expect } = require('chai')
const {
    createNewComment,
    findAllCommentsbyPosts
} = require('../../src/controllers/comments')

describe('controllers/comments',()=>{
    let testingComment = null

    // it('should create comment with postId, title and body assigned', async ()=>{
    //     testingComment = await createNewComment(1, 'Ultimate Coder', 'Arnav Bhaiya')
    //     expect(testingComment).to.have.property('title')
    //     expect(testingComment).to.have.property('postId')
    //     expect(testingComment).to.have.property('body')
    //     expect(testingComment.postId).to.be.a('number')
    //     expect(testingComment.title).to.be.a('string')
    //     expect(testingComment.body).to.be.a('string')
    //     // expect(testingComment.postId).to.equal(1)
    //     // expect(testingComment.title).to.equal('Ultimate Coder')
    //     // expect(testingComment.body).to.equal('Arnav Bhaiya')
    // } )
    it('should find all commments by postId', async ()=>{
        let where ={postId:1}
        let allComments = await findAllCommentsbyPosts(where.postId)
        expect(allComments).to.be.an("array")  
      })
})