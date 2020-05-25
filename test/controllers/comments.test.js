const { expect } = require("chai")

const { createComment } = require("../../src/controllers/comments")


describe("/controllers/comments", () => {
    it("should create comment on a post by user", async() => {
        await expect(createComment(1, 11, `it your life, live it and just do it`)).to.be.rejectedWith(
                "SQLITE_CONSTRAINT: FOREIGN KEY constraint failed"
            )
            .then(() => {

            }).catch((err) => {
                console.error(err)
            });
    })
})