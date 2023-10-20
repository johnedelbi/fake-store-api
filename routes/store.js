import express from 'express';

import storeController from '../controllers/store.js';

const storeRoutes = express.Router();

storeRoutes.get('/', storeController.getProducts);
storeRoutes.get('/add-product', storeController.addProduct);

export default storeRoutes;
