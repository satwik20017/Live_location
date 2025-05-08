import { Router } from 'express';
import { renderLogin, renderRegister, register, login, logout } from '../controllers/auth.controller';

const router = Router();

router.get('/login', renderLogin);
router.post('/login', login);
router.get('/register', renderRegister);
router.post('/register', register);
router.post('/logout', logout);



export default router;
