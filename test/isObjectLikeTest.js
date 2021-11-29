var chai = require("chai")
var isObject = require ("../src/isObjectLike.js")
const expect = chai.expect
var should = require('chai').should()


describe("isObjectLike", () => {

    it("Integer", ()=>{
        expect(function(){isObject(5)}).to.eql(false)
    });

});

