const express = require("express");
const initAllLoginRoutes = require("./routes/loginRoutes");
const initAllAdminRoutes = require("./routes/adminRoutes");
const initAllItTeamRoutes = require("./routes/itTeamRoutes");
const initAllManagerRoutes = require("./routes/managerRoutes");
const initAllVpRoutes = require("./routes/vpRoutes");
const bodyParser = require("body-parser");
const cors = require("cors");

const sequelize = require('./config/db');
const User = require('./models/userModel');
const Request = require('./models/requestModel');
const Item = require('./models/itemModel');
const ItemVendorMap = require('./models/itemVendorMap')
const RequestItemMap = require('./models/requestItemMap')
const RequestStatus = require('./models/requestStatusModel')
const Status = require('./models/statusModel')
const Vendor = require('./models/vendorModel')

const app = express();

//config body-parser
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(cors());

sequelize.sync({ force: false }) // Set force to true if you want to drop and recreate tables on every sync
  .then(() => {
    console.log('Database and tables synced!');
  })
  .catch((err) => {
    console.error('Error syncing database:', err);
});

//init all web routes
// initAllLoginRoutes(app);
// initAllAdminRoutes(app);
// initAllItTeamRoutes(app);
// initAllManagerRoutes(app);
// initAllVpRoutes(app);

let port = 5556;

app.listen(port, ()=>{
   console.log(`App is running at the port ${port}`);
});