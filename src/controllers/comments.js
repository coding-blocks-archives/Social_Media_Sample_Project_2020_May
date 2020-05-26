const {Comments, Posts, Users} = require('../db/models')

async function createComment(postId, userId, title, body){
    return await Comments.create({
        postId,
        userId,
        title,
        body
    })
}

async function findAllComments(query){
    const postId = query.postId
    return await Comments.findAll({
        include: [ Users],
        where:{postId}
    })
}
module.exports = {
    createComment,
    findAllComments
}
/*
async function test(){
    console.log(
        await createComment(
            1,
            1,
            'gogo',
            'tech is awosome'
        )
    )

}
test()*/
/*
async function test(){
    const all = await findAllComments(1)
    all.forEach(t=>{
        console.log(`comment id: ${t.id} title: ${t.user.username} body: ${t.body}`)
    })
}
test()
*/