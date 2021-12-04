import compact from "../src/compact.js";
import chai from "chai"
const expect = chai.expect


describe("compact", () => {

    it("Check without falsey, should return [1, 2, 3, 4, 5]", ()=>{
        expect(compact([1, 2, 3, 4, 5])).to.equal([1, 2, 3, 4, 5])
    });
    it("Check with false, should return [1, 2, 3]", ()=>{
        expect(compact([1, false, 2, 3])).to.deep.equal([1, 2, 3])
    });
    it("Check with zero, should return [1, 2, 3]", ()=>{
        expect(compact([0, 1, 2, 3])).to.deep.equal([1, 2, 3])
    });
    it("Check with null, should return [1, 2, 3]", ()=>{
        expect(compact([1, 2, 3, null])).to.deep.equal([1, 2, 3])
    });
    it("Check with '', should return [1, 2, 3]", ()=>{
        expect(compact([1, '', 2, 3])).to.deep.equal([1, 2, 3])
    });
    it("Check with undefined, should return [1, 2, 3]", ()=>{
        expect(compact([undefined, 1, 2, 3])).to.deep.equal([1, 2, 3])
    });
    it("Check with NaN, should return [1, 2, 3]", ()=>{
        expect(compact([1, 2, NaN, 3])).to.deep.equal([1, 2, 3])
    });
    it("Check with multiple falsey, should return [1, 2, 3]", ()=>{
        expect(compact([0, 1, false, 2, '', 3])).to.deep.equal([1, 2, 3])
    });
    it("Check with empty array, should return []", ()=>{
        expect(compact([])).to.deep.equal([])
    });
});