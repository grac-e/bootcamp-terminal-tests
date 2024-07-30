import assert from "assert";
import {countRegNumber} from "../function/countRegNumber.js";

describe('the countRegNumber test', function () {
    it('should return the number of registration numbers in a string parameter', function () {
        var regCount = countRegNumber('CA 182736,CY 523519,CJ 812328')
        assert.equal(regCount, 3);

        var regCount = countRegNumber('CA 182736')
        assert.equal(regCount, 1);
    });

    it('should request registration numbers in a string', function () {
        var regCount = countRegNumber(87660)
        assert.equal(regCount, "error: numbers are not in a string");
    });

});