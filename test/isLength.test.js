import isLength from "../src/isLength.js";
import chai from "chai"
const expect = chai.expect


describe("isLength", () => {

    it("Check positive integer, true", ()=>{
        expect(isLength(5)).to.equal(true)
    });
    it("Check zero, true", ()=>{
        expect(isLength(0)).to.equal(true)
    });
    it("Check negative integer, false", ()=>{
        expect(isLength(-5)).to.equal(false)
    });
    it("Check infinity, false", ()=>{
        expect(isLength(Infinity)).to.equal(false)
    });
    it("Check string, false", ()=>{
        expect(isLength('5')).to.equal(false)
    });
    it("Check float, false", ()=>{
        expect(isLength(5.2)).to.equal(false)
    });
    it("Check empty, false", ()=>{
        expect(isLength()).to.equal(false)
    });
});