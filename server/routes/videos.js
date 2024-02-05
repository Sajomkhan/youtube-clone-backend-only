import express from 'express'
import {  } from '../controllers/video.js';
import { verifyToken } from '../verifyToken.js';

const router = express.Router();

 // Create a video
 router.post("/", verifyToken, )



export default router;