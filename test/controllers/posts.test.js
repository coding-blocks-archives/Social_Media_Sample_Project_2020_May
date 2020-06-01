const { expect } = require('chai')

const {
    createNewPost,
    findAllPosts,
    showpostbypostid
} = require('../../src/controllers/posts')

console.log("working or not ===============================")

describe('controller/posts', () => {

    let createdPost = null

    it('should create new post', async() => {
        
        createdPost = await createNewPost(1,'title1','body1')
        console.log(createdPost + '=========================================')

        expect(createdPost).to.have.property('title')
        expect(createdPost).to.have.property('body')
        expect(createdPost).to.have.property('userId')

    })

    it('should find all posts', async ()=>{
        
        /* let query = {}

        let foundPost = findAllPosts(query)*/

        let query ={

        }
        let foundPost = await findAllPosts(query)
        let array = []
        for(let f of foundPost){
            array.push(f)
        }
        
        expect(array[0].title).to.equal(createdPost.title)
        expect(array[0].body).to.equal(createdPost.body)

    })

    it('should show post by id', async() => {
        
        let query ={
            userId: createdPost.userId
        }
        let foundPost = await showpostbypostid(query.userId)
        
        expect(foundPost.title).to.equal(createdPost.title)
        expect(foundPost.body).to.equal(createdPost.body)

    })

})