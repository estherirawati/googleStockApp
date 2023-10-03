const express = require('express');
const route = express.Router()

const services = require('../services/render');
const controller = require('../controller/controller');

/**
 *  @description Root Route
 *  @method GET /
 */
route.get('/', services.homeRoutes);

/**
 *  @description add stocks
 *  @method GET /add-stock
 */
route.get('/add-stock', services.add_stock)

/**
 *  @description for update stock
 *  @method GET /update-stock
 */
route.get('/update-stock', services.update_stock)


// API
route.post('/api/stocks', controller.create);
route.get('/api/stocks', controller.find);
route.put('/api/stocks/:docId', controller.update);
route.delete('/api/stocks/:docId', controller.delete);


module.exports = route