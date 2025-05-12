import express, { Request, Response } from 'express'
import { dbconnection } from '../dbconnections/mysql';

export const APIrouter = express.Router();


APIrouter.post("/login", async (req, res) => {
    const { username, password } = req.body

    const [dbresult] = await dbconnection.query('SELECT * FROM users WHERE username = ?', [username])
    const user = dbresult[0]

    if (password !== user.password) {
        res.status(404).json({ msg: 'Invalid Credentials' })
    }

    if (user) {
        res.status(200).json({ msg: 'Login Successful' })
    }

})

APIrouter.post("/register", async (req, res) => {
    const { username, password } = req.body;

    try {
        const [dbresult] = await dbconnection.query(
            'INSERT INTO users (username, password) VALUES (?, ?)',
            [username, password]
        );

        res.status(200).json({ msg: 'User created successfully' });
    } catch (error: any) {

        if (error.code === 'ER_DUP_ENTRY') {
            res.status(409).json({ msg: 'Name not available' });
        }

        res.status(500).json({ msg: 'Internal server error' });
    }
});

