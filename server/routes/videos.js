import express from 'express'
import { addVideo, deleteVideo, getVideo, updateVideo } from '../controllers/video.js';
import { verifyToken } from '../verifyToken.js';

const router = express.Router();

 // Create a video
 router.post("/", verifyToken, addVideo )
 router.post("/", verifyToken, deleteVideo )
 router.post("/", verifyToken, updateVideo )
 router.post("/", verifyToken, getVideo )



export default router;