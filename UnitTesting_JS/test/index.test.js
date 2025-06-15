import * as chai from "chai"
import { capitalizeText, createArray } from "../index.js"
let { assert, expect } = chai
let should = chai.should()

before(function(done) {
  this.timeout(6000) 
  setTimeout(done, 5000)
})

describe("capitalizeText", () => {
  it("Capitalize the text", () => {
    expect(capitalizeText("hamada")).to.equal("HAMADA")
  })
  it("Throws error for non-string input", () => {
    expect(() => capitalizeText(12)).to.throw(TypeError)
  })
})

describe("createArray", () => {
  it("Create an array", () => {
    expect(createArray(3)).to.deep.equal([0, 1, 2])
    createArray(5).should.deep.equal([0, 1, 2, 3, 4])
  })
  it("Create array of proper length", () => {
    assert.lengthOf(createArray(3), 3)
    assert.include(createArray(3), 1)
  })
  it("Handle negative numbers")
})
