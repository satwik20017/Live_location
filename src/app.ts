import express from 'express';
import cookieParser from 'cookie-parser';
import authRoutes from '../src/routes/auth.route';
import locationroute from '../src/routes/location.route'
import path from 'path';
import { mongoConnection, MYSQL } from './dbconnections/mysql';

const app = express();

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '../views'));
app.use(express.static(path.join(__dirname, '..', 'public')));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cookieParser());

//npx ngrok http http://localhost:7777


app.get('/', (req, res) => {
    res.redirect('/login');
});

app.use(authRoutes);
app.use(locationroute)

mongoConnection();
MYSQL();

app.listen(7777, () => {
    console.log(`Server connected to PORT: 7777`);
});
