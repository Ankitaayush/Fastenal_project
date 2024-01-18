const express = require("express")
const adminPageController = require('../controllers/adminPageController');

// init all web routes
let router = express.Router();

let initAllAdminRoutes = (app)=>{
    router.post('/admin', adminPageController.getAdminPage);
    
    return app.use('/', router);
}

module.exports = initAllAdminRoutes;