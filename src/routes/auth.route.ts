import { Router } from 'express';
import { renderLogin, renderRegister, register, login } from '../controllers/auth.controller';

const router = Router();

router.get('/login', renderLogin);
router.post('/login', login);
router.get('/register', renderRegister);
router.post('/register', register);


export default router;
