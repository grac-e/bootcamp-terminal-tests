import assert from "assert";
import {isFromBellville} from "../function/isFromBellville.js";

describe('the isFromBellville test', function () {
    it('should return true if a registration number is for Bellville, otherwise return false', function () {
        assert.equal(isFromBellville('CY 123'), true);
        assert.equal(isFromBellville('CJ 123'), false);
    });

    it('should request a registration number if there is none', function () {
        assert.equal(isFromBellville(''), "please enter registration number");
    });


});