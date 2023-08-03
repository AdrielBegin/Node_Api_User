import { Router } from "express";
import UserController from "../controller/UserController";
import AuthController from "../controller/AuthController";


const router = Router();

router.post('/user/createUser', UserController.createUser);

router.post('/user/session', AuthController.authUser);

export default router