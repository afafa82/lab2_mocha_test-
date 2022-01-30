const assert = require("assert");
const { expect } = require("chai");
// const add = require("../app/calculator").add;
const app = require("../app/calculator");

describe("App", function () {
  it("add(5, 2) expected result 7 PASS", function () {
    let result = app.add(5, 2);
    expect(result).to.be.eq(7);
  });
  it("add(5, 2) expected result 8 FAIL", function () {
    let result = app.add(5, 2);
    expect(result).to.be.eq(8);
  });

  it("sub(5, 2) expected result 3 PASS", function () {
    let result = app.sub(5, 2);
    expect(result).to.be.eq(3);
  });
  it("sub(5, 2) expected result 5 FAIL", function () {
    let result = app.sub(5, 2);
    expect(result).to.be.eq(5);
  });

  it("mul(5, 2) expected result 10 PASS", function () {
    let result = app.mul(5, 2);
    expect(result).to.be.eq(10);
  });
  it("mul(5, 2) expected result 12 FAIL", function () {
    let result = app.mul(5, 2);
    expect(result).to.be.eq(12);
  });

  it("div(10,2) expected result 5 PASS", function () {
    let result = app.div(10, 2);
    expect(result).to.be.eq(5);
  });
  it("div(10, 2) expected result 2 FAIL", function () {
    let result = app.div(10, 2);
    expect(result).to.be.eq(2);
  });
});
