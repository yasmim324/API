const express = require('express');
const UserController = require('./controllers/UserController');
const AddressController = require('./controllers/AddressController');
const TechsController = require('./controllers/TechsController');
const ReportController = require('./controllers/ReportController');

const routes = express.Router();

routes.get('/user' , UserController.index);
routes.post('/user' , UserController.store);

routes.get('/users/:user_id/addresses', AddressController.index);
routes.post('/users/:user_id/addresses', AddressController.store);

routes.get('/users/:user_id/techs', TechsController.index);
routes.post('/users/:user_id/techs', TechsController.store);
routes.delete('/users/:user_id/techs', TechsController.delete);

routes.get('/report', ReportController.show);




module.exports = routes;