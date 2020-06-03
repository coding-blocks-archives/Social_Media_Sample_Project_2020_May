const { expect } = require('chai')
const {
    createNewComment,
    findAllCommentsbyPosts
} = require('../../src/controllers/comments')

describe('controllers/comments',()=>{
    let testingComment = null

    it.only('should create comment with postId, title and body assigned', async ()=>{
        testingComment = await createNewComment(1, 'Coder', 'Arnav Bhaiya')
        expect(testingComment.postId).to.equal(1)
        expect(testingComment.title).to.equal('Coder')
        expect(testingComment.body).to.equal('Arnav Bhaiya')
    } )
    it('should find all commments by postId', async ()=>{
        let where ={postId:1}
        let allComments = await findAllCommentsbyPosts(where.postId)
        expect(allComments).to.be.an("array")  
      })
})