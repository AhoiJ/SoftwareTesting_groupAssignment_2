
import isObject from "../src/isObjectLike.js";
import chai from "chai"
//var chai = require("chai")
const expect = chai.expect

//var should = require('chai').should()



describe("isObjectLike", () => {

    it("Integer", ()=>{
        expect(isObject(5)).to.equal(false)
    });

});

