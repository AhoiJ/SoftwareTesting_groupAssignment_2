import isSymbol from "../src/isSymbol.js";
import chai from "chai"
const expect = chai.expect


describe("isSymbol", () => {

    it("Check Symbol.iterator, true", ()=>{
        expect(isSymbol(Symbol.iterator)).to.equal(true)
    });
    it("Check empty Symbol, true", ()=>{
        expect(isSymbol(Symbol())).to.equal(true)
    });
    it("Check empty, false", ()=>{
        expect(isSymbol()).to.equal(false)
    });
    it("Check string, false", ()=>{
        expect(isSymbol('test')).to.equal(false)
    });
    it("Check Symbol wrapper object, true", ()=>{
        expect(isSymbol(Object(Symbol('test')))).to.equal(true)
    });
});