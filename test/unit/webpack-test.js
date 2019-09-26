const assert = require('assert');
describe('webpack test ', () => {
    const baseConfig = require('../../lib/webpack.base.js')
    
    it('entry', () => {
        assert.equal(baseConfig.entry.expense.indexOf('hly-webpack-builder/test/smoke/template/src/expense/index.js')> -1, true);
        assert.equal(baseConfig.entry['my-account'].indexOf('hly-webpack-builder/test/smoke/template/src/my-account/index.js')> -1, true);
    });
})