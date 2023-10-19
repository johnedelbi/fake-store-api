import path, { dirname } from 'path';
import { fileURLToPath } from 'url';

import express, { urlencoded } from 'express';
import dotenv from 'dotenv';
import cookieParser from 'cookie-parser';
import session from 'express-session';

import userRoutes from './routes/user.js';

//create the path
const __fileName = fileURLToPath(import.meta.url);
const PATH = dirname(__fileName);
// init dotenv
dotenv.config();

const PORT = process.env.PORT || 3005;

//init express
const app = express();

//parse the body
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//template engine
app.set('view engine', 'ejs');
app.set('views', path.join(PATH, 'views'));

//init cookies & session
app.use(cookieParser());
app.use(
    session({
        secret: process.env.SECRET,
        resave: false,
        saveUninitialized: true
    })
);

//use routes
app.use('/user', userRoutes);


//handel 404
app.use('*', (req, res) => {
    res.status(404).render('message', {
        title: '404',
        message: 'page not found'
    });
});

//listen to the port
app.listen(PORT, () => {
    console.log(`server is running on port ${PORT}`);
});
