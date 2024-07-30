import assert from "assert";
import {isWeekday} from "../function/isWeekday.js";

describe('the isWeekday test', function () {
    it('should find out if the parameter passed in a string is a day of the week', function () {
      assert.equal(isWeekday('Saturday'), false);
      assert.equal(isWeekday('Sunday'), false);
      assert.equal(isWeekday('Monday'), true);
      assert.equal(isWeekday('Tuesday'), true);
      assert.equal(isWeekday('Wednesday'), true);
      assert.equal(isWeekday('Thursday'), true);
      assert.equal(isWeekday('Friday'), true);
  
    });
  
    it('should ask for a valid input that ends with -day', function () {
      assert.equal(isWeekday('Saturdy'), "Please enter a day of the week");
    });
  
});
