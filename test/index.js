const path = require('path');
process.chdir(path.join(__dirname, 'smoke/template'));

describe('webpack unit test',()=>{
    require('./unit/webpack-test')
})