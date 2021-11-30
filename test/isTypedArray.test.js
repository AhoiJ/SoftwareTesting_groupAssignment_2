import isTypedArray from "../src/isTypedArray.js";
import chai from "chai"
const expect = chai.expect


describe("isTypedArray", () => {

    it("Check integer, false", ()=>{
        expect(isTypedArray(5)).to.equal(false)
    });
    it("Check string, false", () => {
        expect(isTypedArray("a")).to.equal(false)
    });
    it("Check empty, false", () => {
        expect(isTypedArray()).to.equal(false)
    });
    it("Check with object, false", () => {
        var obj = {}
        expect(isTypedArray(obj)).to.equal(false)
    });
    it("Check with array object, false", () => {
        expect(isTypedArray([1,2,3])).to.equal(false)
    });
    it("Check with typed array, true", () => {
        var typedArray = new Uint8Array([1, 2, 3, 4]);
        expect(isTypedArray(typedArray)).to.equal(true)
    });
});

