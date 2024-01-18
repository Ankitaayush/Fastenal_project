const express = require("express")
const loginPageController = require('../controllers/loginPageController');

// init all web routes
let router = express.Router();

let intiAllManagerRoutes = (app)=>{
    router.get('/login', loginPageController.getLoginPage);

    return app.use('/', router);
}

module.exports = intiAllManagerRoutes;