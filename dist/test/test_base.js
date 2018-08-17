"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var index_1 = require("../src/index");
describe('Hello function', function () {
    it('should read simple xml without errors', function () {
        var parser = new index_1.XMLParser(['<div style="Jepa">Hello World!!!</div>']);
        var max_cnt = 100000;
        while (!parser.eof) {
            parser.parse({
                beginNode: function (name, buffer_index) {
                    console.log('Begin ', name);
                },
                setAttribute: function (name, value, buffer_index) {
                    console.log('attr ', name, '=', value);
                },
                addTextNode: function (value, buffer_index) {
                    console.log('test: ', value);
                },
                closeNode: function (name, buffer_index) {
                    console.log('closed: ', name);
                }
            });
            if (max_cnt-- < 0)
                break;
        }
    });
    it('should read XML to Object', function () {
        var obj = index_1.toObject('<div style="Jepa">Hello World!!!</div>');
        console.log(obj);
    });
});
//# sourceMappingURL=test_base.js.map