import express from 'express';
import userController from '../controllers/user.js';
const userRoutes = express.Router();

userRoutes.get('/', userController.getForm);
userRoutes.post('/', userController.loggedIn);
userRoutes.get('/login', userController.loginForm);
userRoutes.post('/signup', userController.signupUser);

export default userRoutes;
