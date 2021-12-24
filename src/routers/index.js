
const homeRouter = require('./home/home');

function mainRoutes(app) {

    app.use('/', homeRouter)
    
}

module.exports = mainRoutes