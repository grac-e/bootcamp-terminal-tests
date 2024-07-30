import assert from "assert";
import {countAllPaarl} from "../function/countAllPaarl.js";

describe('The countAllPaarl test', function(){

    it('should return the number of registration numbers in the string for Paarl', function(){
        assert.equal(3, countAllPaarl('CJ 345 123, CJ 2345, CL 123-546, CK 345, CJ 123'));
        assert.equal(2, countAllPaarl('CJ 345 123, CK 345, CJ 123'));
    });
});