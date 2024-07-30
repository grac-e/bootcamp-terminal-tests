import assert from "assert";
import {yearsAgo} from "../function/yearsAgo.js";

describe('The yearsAgo test', function(){

    it('should return how many years ago that year is from the current year', function(){
        assert.equal((new Date().getFullYear() - 1976), yearsAgo(1976));
    });

    // it('should request an appropriate date', function(){
    //     assert.equal((new Date().getFullYear() - 20001), yearsAgo(20001));
    // });
});