const assert = require('assert');
describe('webpack test ', () => {
    const baseConfig = require('../../lib/webpack.base.js')
    it('entry', () => {
        assert.equal(baseConfig.entry.expense, '/Users/fangqiang/Desktop/chris-learning/webpack/webpack-design/hly-webpack-builder/test/smoke/template/src/expense/index.js');
        assert.equal(baseConfig.entry['my-account'], '/Users/fangqiang/Desktop/chris-learning/webpack/webpack-design/hly-webpack-builder/test/smoke/template/src/my-account/index.js');
    });
})