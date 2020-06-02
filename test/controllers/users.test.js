const { expect } = require("chai");
const {
  createAnonUser,
  getUserById,
  getUserByUsername,
} = require("../../src/controllers/users");

describe("controllers/users", () => {
  let createdUser = null;

  it("should create anonymous user", async () => {
    createdUser = await createAnonUser();
    expect(createdUser).to.have.property("username");
    expect(createdUser.id).to.be.a("number");
  });

  it("should find user by userid", async () => {
    let foundUser = await getUserById(createdUser.id);
    expect(foundUser.username).to.equal(createdUser.username);
  });

  it("should through error for non number userid", async () => {
    await expect(getUserById("sss")).to.be.rejectedWith(
      "user id should be integer"
    );
    await expect(getUserById(null)).to.be.rejectedWith("user id not provided");
    await expect(getUserById(true)).to.be.rejectedWith(
      "user id should be integer"
    );
    await expect(getUserById(0)).to.be.rejectedWith("user id not provided");
  });

  it("should find user by username", async () => {
    let foundUser = await getUserByUsername(createdUser.username);
    expect(foundUser.id).to.equal(createdUser.id);
  });
});
