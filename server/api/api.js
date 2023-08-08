import express from 'express';
import userController from '../controller/controllerUsers.js';
import { authUser } from '../controller/controllerUsers.js';
import upload from '../middlewares/fileUpload/upload.js';

const router = express.Router();


//contacts/?page=1&limit=10&favorite=true



//users api router
router.get('/users', userController.get);

router.post('/users/signup', userController.register);

router.post('/users/login', userController.login);

router.post('/users/logout', authUser, userController.logout);

router.get('/users/current', authUser, userController.currentUser);

router.patch(
  '/users/avatars',
  authUser,
  upload.single('avatar'),
  userController.uploadAvatar
);



export default router;
