import assert from "assert";
import {regCheck} from "../function/regCheck.js";

describe('the regCheck test', function () {
    it('should check if a registration number is for GP, L, EC or MP registration plates', function () {
        assert.equal(regCheck('DC 55 YU GP', 'GP'), true);
        assert.equal(regCheck('DC 55 YU GP', 'EC'), false);

        assert.equal(regCheck('5566 L', 'L'), true);
        assert.equal(regCheck('5566 L', 'M'), false);

        assert.equal(regCheck('ERT 123 EC', 'EC'), true);
        assert.equal(regCheck('ERT 123 EC', 'GP'), false);

        assert.equal(regCheck('FGT 123 MP', 'MP'), true);
        assert.equal(regCheck('FGT 123 MM', 'MP'), false);
    });

    it('should request a location indicator', function () {
        assert.equal(regCheck('DC 55 YU GP'), "please indicate location");
    });

});