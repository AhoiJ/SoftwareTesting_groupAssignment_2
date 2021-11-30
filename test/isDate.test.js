import isDate from "../src/isDate.js";
import chai from "chai"
const expect = chai.expect


describe("isDate", () => {

    it("Check integer, false", ()=>{
        expect(isDate(5)).to.equal(false)
    });
    it("Check string, false", () => {
        expect(isDate("a")).to.equal(false)
    });
    it("Check empty, false", () => {
        expect(isDate()).to.equal(false)
    });
    it("Check with object, false", () => {
        var obj = {}
        expect(isDate(obj)).to.equal(false)
    });
    it("Check with array object, false", () => {
        expect(isDate([1,2,3])).to.equal(false)
    });
    it("Check with new Date object, true", () => {
        expect(isDate(new Date())).to.equal(true)
    });
    it("Check with manual Date object, true", () => {
        expect(isDate(new Date(1925, 12, 11, 23, 25, 2))).to.equal(true)
    });
    it("Check with invalid manual Date object, should not pass", () => {
        expect(isDate(new Date(1925, 22, 11, 23, 25, 2))).to.equal(false)
    });
});

