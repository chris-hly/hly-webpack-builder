const glob = require('glob-all');

describe('cheche css js file', function () {
    it('should generate css js file', function (done) {
        const file = glob.sync([
            './dist/expense_*.js',
            './dist/expense_*.css',
            './dist/my-acount_*.css',
            './dist/my-acount_*.js',
        ])
        if (file.length > 0) {
            done();
        }else{
            throw new Error('no css js  file geneerat')
        }
    });
});
