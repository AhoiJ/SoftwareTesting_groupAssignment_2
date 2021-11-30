
import isObject from "../src/isObjectLike.js";
import chai from "chai"
//var chai = require("chai")
const expect = chai.expect


describe("isObjectLike", () => {

    it("Check integer, false", ()=>{
        expect(isObject(5)).to.equal(false)
    });
    it("Check string, false", () => {
        expect(isObject("a")).to.equal(false)
    });
    it("Check empty, false", () => {
        expect(isObject()).to.equal(false)
    });
    it("Check with object, true", () => {
        expect(isObject([1,2,3])).to.equal(true)
    })

});

