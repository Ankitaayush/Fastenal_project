
const Sequelize = require('sequelize');

    const Request=require ('../models/requestModel.js');
    const RequestItemMap=require ('../models/requestItemMap.js');
    const Status=require ('../models/statusModel.js');
    const RequestStatus=require ('../models/requestStatusModel.js');
    const Item=require ('../models/itemModel.js');
    const Vendor=require ('../models/vendorModel.js');
  
    
     // Adjust the path to your models
    const fetchAllItems = async () => {
        try {
          // Fetch all itid and itemName from the Item model
          const items = await Item.findAll({
            attributes: ['itid', 'item_name'],
            raw: true,
          });
      
          // Return the result
          return items;
        } catch (error) {
          console.error('Error fetching items:', error);
          throw error; // You might want to handle the error appropriately in your application
        }
      };
      

    let newRequestCreate = async (req, res) => {
      try {
        const currentDate = new Date();

// Format the date in SQL format (YYYY-MM-DD)
const sqlFormattedDate = currentDate.toISOString().split('T')[0];

        // Assuming you have access to the req object
        const requestData = req.body; // Replace with the actual path to your request data
    
        // Create a row with data from the request object
        const createdRow = await Request.create({ pid: requestData.pid,req_date:sqlFormattedDate });
    
        // Fetch the generated ID (rid)
        const generatedRid = createdRow.dataValues.rid;
   
    
        // Iterate through the arrays in req.body and insert into RequestItemMap
        const itemsArray = requestData.itemsArray; // Replace with the actual path to your items array
        const promises = itemsArray.map(async (item) => {
            console.log('Item:', item);
          const {quantity, item_spec, itid} = item;
    
          // Insert into RequestItemMap with generated rid
          await RequestItemMap.create({
            rid: generatedRid,
            quantity: quantity,
            item_spec: item_spec,
            itid: itid,
          });
        });
    
        // Wait for all the promises to resolve
        await Promise.all(promises);
    
          
        
        // Using Sequelize to perform the query
        const result = await RequestItemMap.findAll({
          attributes: ['rm_id', 'quantity'],
          include: [
            {
              model: Item,
              attributes: ['itid'],
              include: [
                {
                  model: Vendor,
                  attributes: ['vid', 'email'],
                },
              ],
            },
          ],
          where: {
            rm_id: {
              [Sequelize.Op.notIn]: Sequelize.literal('(SELECT rm_id FROM requeststatuses)'),
            },
          },
          raw: true,
          nest: true,
        });
    
        // Create a new Status record
        const createdStatus = await Status.create({
          // Add any default values for the Status model here
        });
    
        // Fetch the auto-incremented ID from the created Status record
        const statusId = createdStatus.sid;
    
        // Iterate through the array of rows and insert into RequestStatus
        for (const row of result) {
          const { rm_id, vid } = row;
    
          // Insert into RequestStatus with null values (except for status_id)
          await RequestStatus.create({
            rm_id: rm_id,
            vid: vid,
            sid: sid,
            quote_amount: null,
            purchase_order: null,
            invoice: null,
          });
        }
    
        return res.send(result);
      } catch (error) {
        console.error('Error creating row or items:', error);
        return res.status(500).send('Internal Server Error');
      }
    };
    const runCode = async () => {
        try {
          const result = await newRequestCreate({body:{
            pid: 1,
            itemsArray: [
              { quantity: 1, item_spec: "hello my friend", itid: 1 },
              { quantity: 11, item_spec: "hello my friend 2", itid: 2 },
              { quantity: 21, item_spec: "hello my friend 3", itid: 3 },
            ],
        }});
      
          console.log(result);
        } catch (error) {
          console.error('Error:', error);
        }
      };
      
      // Call the async function
      runCode();

    
    
    // Example usage assuming you have Express app
    // app.post('/createRequest', newRequestCreate);
    


module.exports = {
    newRequestCreate : newRequestCreate,

}