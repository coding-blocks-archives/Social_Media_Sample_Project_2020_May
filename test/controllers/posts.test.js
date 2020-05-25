const { expect } = require("chai");
const { createNewPost, findAllPosts } = require("../../src/controllers/posts");

describe("/controllers/posts", () => {
  it("should create a new post", async () => {
    const post = await createNewPost(1, "title", "body");
    expect(post.userId).to.equal(1);
    expect(post.title).to.equal("title");
    expect(post.body).to.equal("body");
  });
  it("should find all the posts ", async () => {
    let query = {
      userId: 1,
    };
    let posts = await findAllPosts(query);
    expect(posts).to.be.an("array");
  });
});
