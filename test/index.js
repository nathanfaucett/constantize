var tape = require("tape"),
    constantize = require("..");


tape("constantize(string : String)", function(assert) {
    assert.equal(constantize("string-string"), "STRING_STRING");
    assert.equal(constantize("stringString"), "STRING_STRING");
    assert.end();
});
