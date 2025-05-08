import { Router } from 'express';

export const loginrouter = Router();

loginrouter.post('/apitest', (req, res) => {
    console.log("object");
    res.status(200).json({ message: "API Test successful" });
});
