const express = require("express")
const itTeamPageController = require('../controllers/itTeamPageController');

// init all web routes
let router = express.Router();

let initAllItTeamRoutes = (app)=>{
    router.get('/it', itTeamPageController.getItTeamPage);
    
    return app.use('/', router);
}

module.exports = initAllItTeamRoutes;