import express from 'express';
import userController from '../controllers/user.js';
import isLoggedIn from '../middleware/isLoggedIn.js';

const userRoutes = express.Router();

userRoutes.get('/', userController.getForm);
userRoutes.post('/', userController.loggedIn);
userRoutes.get('/login', isLoggedIn, userController.loginForm);
userRoutes.post('/signup', isLoggedIn, userController.signupUser);

export default userRoutes;
