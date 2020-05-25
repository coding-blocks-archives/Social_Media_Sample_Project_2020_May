// setup testing environment before requiring anything
process.env.NODE_ENV = "testing";

const { db } = require("../src/db/models");
const chai = require("chai");
chai.use(require("chai-as-promised"));

before(async () => {
  await db.sync();
});
