const { expect } = require('chai')

const {
    createNewComment,
    showAllComments
} = require('../../src/controllers/comments')

describe('controllers/comments', () => {
    let createComment = null

    it('it should create a comment', async() => {
        createComment = await createNewComment('title','body',1,1)

        expect(createComment).to.have.property('title')
        expect(createComment).to.have.property('body')
        expect(createComment).to.have.property('userId')
        expect(createComment).to.have.property('postId')
        expect(createComment.title).to.be.a('string')
        expect(createComment.body).to.be.a('string')
        expect(createComment.userId).to.be.a('number')
        expect(createComment.postId).to.be.a('number')
    })

    it('it should show all comments', async() => {

        let query ={
            postId: createComment.postId
        }
        console.log(query + "zzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz")
        let foundcomment = await showAllComments(query)
        console.log(foundcomment[0].title + "===================== foundcomment =====================")
        
        expect(foundcomment[0]).to.property('title')
        expect(foundcomment[0]).to.property('body')
        expect(foundcomment[0]).to.property('userId')
        expect(foundcomment[0]).to.property('postId')
        expect(foundcomment[0].title).to.equal(createComment.title)
        expect(foundcomment[0].body).to.equal(createComment.body)
        expect(foundcomment[0].userId).to.equal(createComment.userId)
        expect(foundcomment[0].postId).to.equal(createComment.postId)
        

    })


    })

