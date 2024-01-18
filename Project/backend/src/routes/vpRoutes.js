const express = require("express")
const vpPageController = require('../controllers/vpPageController');

// init all web routes
let router = express.Router();

let initAllVpRountes = (app)=>{
    router.get('/vp', vpPageController.getVpPage);
    
    return app.use('/', router);
}

module.exports = initAllVpRountes;