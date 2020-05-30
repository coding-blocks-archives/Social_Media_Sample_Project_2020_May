const {expect} = require('chai')
const {findAllComments, createComment} = require('../../src/controllers/comments')

describe('controllers/comments', ()=>{
    let createdComment = null
    it('should create comment with postId, userId, title, body', async ()=>{
        createdComment = await createComment(1, 1, 'testing comment title', 'testing comment body')
        expect(createdComment).to.have.property('title')
        expect(createdComment).to.have.property('body')
        expect(createdComment).to.have.property('postId')
        expect(createdComment).to.have.property('userId')
        expect(createdComment.id).to.be.a('number')
        expect(createdComment.userId).to.be.a('number')
        expect(createdComment.postId).to.be.a('number')
        expect(createdComment.title).to.be.a('string')
        expect(createdComment.body).to.be.a('string')
    })

    it('should find all comment by postId', async ()=>{
        let query ={
            postId: createdComment.postId
        }
        let allComments = await findAllComments(query)
        let arrObj = []
        for(let p of allComments){
            arrObj.push(p)
        }
        let len=arrObj.length
        expect(arrObj[len-1].title).to.equal(createdComment.title)
        expect(arrObj[len-1].body).to.equal(createdComment.body)

    })
})