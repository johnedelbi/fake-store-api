import express from 'express';
import userController from '../controllers/user.js';
const userRoutes = express.Router();

userRoutes.get('/', userController.setCookieAndSession);
userRoutes.get('/verify', userController.verifyUserCookieAndSession);

export default userRoutes;
