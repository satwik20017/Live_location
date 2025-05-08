import { Request, Response } from 'express';
import { registerUser, loginUser } from '../services/auth.service';

export const renderLogin = (req: Request, res: Response) => {
    res.render('login', { error: null });
};

export const renderRegister = (req: Request, res: Response) => {
    res.render('register', { error: null });
};

export const register = async (req: Request, res: Response) => {
    try {
        await registerUser(req.body);
        res.redirect('/login');
    } catch (err: any) {
        res.render('register', { error: err.message });
    }
};

export const login = async (req: Request, res: Response) => {
    try {
        const user = await loginUser(req.body);
        // res.send(`Login successful. Welcome, ${user.username}`);
        res.redirect('/location')

    } catch (err: any) {
        res.render('login', { error: err.message });
    }
};
