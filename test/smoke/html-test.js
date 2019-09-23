const glob = require('glob-all');

describe('cheche css js file', function () {
    it('should generate css js file', function (done) {
        const file = glob.sync([
            './dist/expense.html',
            './dist/my-account.html',
    
        ])
        if (file.length > 0) {
            done();
        }else{
            throw new Error('no html file geneerat')
        }
    });
});
