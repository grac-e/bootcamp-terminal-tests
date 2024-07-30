import assert from "assert";
import { fromWhere } from "../function/fromWhere.js";

describe('The fromWhere test', function () {

    it('should return the town a car is from', function () {
        assert.equal(fromWhere('CY 567489'), 'Bellville');
        assert.equal(fromWhere('CJ 343502'), 'Paarl');
        assert.equal(fromWhere('CA 987504'), 'Cape Town');
        assert.equal(fromWhere('ZN 568593'), 'Some other place!');
    });
});