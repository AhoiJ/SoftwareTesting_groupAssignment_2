import isArguments from "../src/isArguments.js";
import chai from "chai"
const expect = chai.expect


describe("isArguments", () => {
    it("Check with arguments object, true", () => {
        expect(isArguments(function() { return arguments }())).to.equal(true)
    });
    it("Check with object, false", () => {
        var obj = {}
        expect(isArguments(obj)).to.equal(false)
    });

    it("Check integer, false", ()=>{
        expect(isArguments(5)).to.equal(false)
    });
    it("Check empty, false", () => {
        expect(isArguments()).to.equal(false)
    });
    it("Check with object, false", () => {
        var obj = {}
        expect(isArguments(obj)).to.equal(false)
    });
    it("Check string, false", () => {
        expect(isArguments("a")).to.equal(false)
    });
    it("Check with array object, false", () => {
        expect(isArguments([1,2,3])).to.equal(false)
    });

    
});