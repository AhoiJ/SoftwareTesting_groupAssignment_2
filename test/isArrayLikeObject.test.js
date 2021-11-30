import isArrayLikeObject from "../src/isArrayLikeObject.js";
import chai from "chai"
const expect = chai.expect


describe("isArrayLikeObject", () => {

    it("Check integer, false", ()=>{
        expect(isArrayLikeObject(5)).to.equal(false)
    });
    it("Check string, false", () => {
        expect(isArrayLikeObject("a")).to.equal(false)
    });
    it("Check empty, false", () => {
        expect(isArrayLikeObject()).to.equal(false)
    });
    it("Check with object, false", () => {
        var obj = {}
        expect(isArrayLikeObject(obj)).to.equal(false)
    });
    it("Check with empty array, true", () => {
        var array = new Array();
        expect(isArrayLikeObject(array)).to.equal(true)
    });
    it("Check with array object, true", () => {
        expect(isArrayLikeObject([1,2,3])).to.equal(true)
    });

});

