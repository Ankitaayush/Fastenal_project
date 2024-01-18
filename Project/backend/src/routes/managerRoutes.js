const express = require("express")
const managerPageController = require('../controllers/managerPageController');

// init all web routes
let router = express.Router();

let initAllItTeamRountes = (app)=>{
    router.get('/manager', managerPageController.getManagerPage);
    
    return app.use('/', router);
}

module.exports = initAllItTeamRountes;