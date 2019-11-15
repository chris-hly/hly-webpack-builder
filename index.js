if(process.env.NODE_ENV === 'production'){
    module.exports = require('./lib/webpack.prod')
} else{
    module.exports = require('./lib/webpack.dev')
}