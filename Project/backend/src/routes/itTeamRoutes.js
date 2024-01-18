const Item = require('../models/itemModel');
 
let getItTeamPage = (req, res)=>{
    return res.send({text : "My name is IT Team"});
};
 
const createItem = async (req, res) => {
    try {
        const newItem = await Item.create(req.body);
        return res.status(201).json({
            status: 'created',
            newItem
        });
    } catch (err) {
        return res.status(400).json({
            status: 'Bad request',
            err
        })
    }
}
 
 
const getAllItems = async(req, res) => {
    try {
        const items = await Item.findAll();
        if(!items) {
            return res.status(404).json({
                status: 'Failure',
                message: 'Not Found!'
            })
        }
 
        return res.status(200).json({
            status: 'success',
            items
        })
    } catch (err) {
        return res.status(500).json({
            status: 'Failure',
            message: 'Server Error'
        })
    }
}
 
const getItem = async(req, res) => {
    try {
        const item = await Item.findByPk(req.params.id)
        if(!item) {
            return res.status(404).json({
                status: 'failure',
                message: 'Not Found!'
            })
        }
       
        return res.status(200).json({
            status: 'success',
            item
        })
    } catch (err) {
        return res.status(500).json({
            status: 'Server error',
            err
        })
    }
}
 
const updateItem = async (req, res) => {
    const itemId = req.params.id;
    try {
        const item = await Item.findByPk(itemId);
        if (!item) {
        return res.status(404).json({
            status: 'failure',
            error: 'Not Found'
         });
        }
 
        await item.update(req.body);
        return res.status(201).json({
            status: 'success',
            item
        });
    } catch (error) {
        return res.status(500).json({ error: 'Internal Server Error' });
    }
}
 
const deleteItem = async(req, res) => {
    const itemId = req.params.id;
    try {
        const item = await Item.findByPk(itemId);
        if (!item) {
        return res.status(404).json({ error: 'Item not found' });
        }
 
        await item.destroy();
        return res.status(204).json();
    } catch (error) {
        console.error(error);
        return res.status(500).json({ error: 'Internal Server Error' });
    }
}
 
module.exports = {
    getItTeamPage,
    createItem,
    getAllItems,
    getItem,
    updateItem,
    deleteItem
}
 
itTeamRoutes.js
const express = require("express")
const {getItTeamPage, createItem, getAllItems, getItem, updateItem, deleteItem} = require('../controllers/itTeamPageController');
 
 
// init all web routes
let router = express.Router();
 
let initAllItTeamRoutes = (app)=>{
    // view route
    router.get('/it', getItTeamPage);
 
    // backend api routes
    router.post('/it/item', createItem)
    router.get('/it/item', getAllItems)
    router.get('/it/item/:id', getItem)
    router.put('/it/item/:id', updateItem)
    router.delete('/it/item/:id', deleteItem)
   
    return app.use('/', router);
}
 
module.exports = initAllItTeamRoutes;
