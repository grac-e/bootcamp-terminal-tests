import assert from "assert";
import { findItemsOver } from "../function/findItemsOver.js";

describe('The findItemsOver test', function () {
    var itemList = [
        {name : 'apples', qty : 10},
        {name : 'pears', qty : 37},
        {name : 'bananas', qty : 27},
        {name : 'apples', qty : 3},
    ];
    
    var results = [
        {name : 'pears', qty : 37},
        {name : 'bananas', qty : 27},
    ];
    
    var itemList2 = [
        {name : 'apples', qty : 10},
        {name : 'pears', qty : 19},
        {name : 'bananas', qty : 17},
        {name : 'apples', qty : 3},
    ];
    
    var results2 = [];
    
    var itemList3 = [
        {name : 'apples', qty : 40},
        {name : 'pears', qty : 20},
        {name : 'bananas', qty : 23},
        {name : 'apples', qty : 37}
    ];
    
    var results3 = [
        {name : 'apples', qty : 40},
        {name : 'bananas', qty : 23},
        {name : 'apples', qty : 37}
    ];

    it('should return  products that have a quantity higher than the threshold', function () {
        assert.deepEqual(results, findItemsOver(itemList, 20));
        assert.deepEqual(results2, findItemsOver(itemList2, 20));
        assert.deepEqual(results3, findItemsOver(itemList3, 20));
    });
});