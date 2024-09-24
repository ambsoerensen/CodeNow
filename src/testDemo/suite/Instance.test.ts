
import * as chai from 'chai';
import * as chaiAsPromised from 'chai-as-promised';
import { assert } from 'chai';

chai.use(chaiAsPromised);

//surpress log output
//console.log = function () { };
//console.warn = function () { };
//console.error = function () { };

// Defines a Mocha test suite to group tests of similar kind together
describe("CodeNow Integration", async function ()
{
    it("should be true", async () =>
    {
        let i = true
        assert.equal(i, true)
    });
    it("should be false", async () =>
    {
        let i = !true
        assert.equal(i, false)
    });
    it("1+1 = 2", async () =>
    {
        let i = 1 + 1
        assert.equal(i, 2)
    });

})