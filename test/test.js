var assert = require("assert"),
    constantize = require("../src/index");


describe("constantize(string : String)", function() {
    it("should constantize string, 'value' -> 'VALUE'", function() {
        assert.equal(constantize("string-string"), "STRING_STRING");
        assert.equal(constantize("stringString"), "STRING_STRING");
    });
});
