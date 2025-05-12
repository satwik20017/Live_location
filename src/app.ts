import express from 'express';
import cookieParser from 'cookie-parser';
import authRoutes from '../src/routes/auth.route';
import locationroute from '../src/routes/location.route'
import path from 'path';
import cors from 'cors'
import { mongoConnection, MYSQL } from './dbconnections/mysql';
import { APIrouter } from './API/api';

const app = express();

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '../views'));
app.use(express.static(path.join(__dirname, '..', 'public')));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cookieParser());
app.use(cors());

//npx ngrok http http://localhost:7777


app.get('/', (req, res) => {
    res.redirect('/login');
});


app.use(authRoutes);
app.use(locationroute)


mongoConnection();
MYSQL();

app.use('/api', APIrouter)
app.listen(7777, () => {
    console.log(`Server connected to PORT: 7777`);
});
