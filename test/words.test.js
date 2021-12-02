import words from "../src/words.js";
import chai from "chai"
const expect = chai.expect


describe("words", () => {

    it("Check words without pattern, should return ['a', 'b', 'c', 'd']", ()=>{
        expect(words('a, b, c, & d')).to.deep.equal(['a', 'b', 'c', 'd'])
    });
    it("Check words with pattern, should return ['a', 'b', 'c', '&', 'd']", ()=>{
        expect(words('a, b, c, & d', /[^, ]/g)).to.deep.equal(['a', 'b', 'c', '&', 'd'])
    });
    it("Check words with empty string, should return []", ()=>{
        expect(words('')).to.deep.equal([])
    });
    it("Check words with pattern and empty string, should return []", ()=>{
        expect(words('', /[^, ]/g)).to.deep.equal([])
    });
});