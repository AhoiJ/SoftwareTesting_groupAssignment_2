import isArrayLike from "../src/isArrayLike.js";
import chai from "chai"
const expect = chai.expect


describe("isArrayLike", () => {

    it("Check integer, false", ()=>{
        expect(isArrayLike(5)).to.equal(false)
    });
    it("Check empty, false", () => {
        expect(isArrayLike()).to.equal(false)
    });
    it("Check with object, false", () => {
        var obj = {}
        expect(isArrayLike(obj)).to.equal(false)
    });
    it("Check string, true", () => {
        expect(isArrayLike("a")).to.equal(true)
    });
    it("Check with array object, true", () => {
        expect(isArrayLike([1,2,3])).to.equal(true)
    });

});

