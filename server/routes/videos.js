import express from 'express'
import { addVideo, addview, deleteVideo, getByTag, getVideo, random, search, sub, trend, updateVideo } from '../controllers/video.js';
import { verifyToken } from '../verifyToken.js';

const router = express.Router();

 router.post("/", verifyToken, addVideo )
 router.put("/:id", verifyToken, updateVideo )
 router.delete("/:id", verifyToken, deleteVideo )
 router.get("/find/:id", getVideo )
 router.put("/view/:id", addview )
 router.get("/trend", trend )
 router.get("/random", random )
 router.get("/sub", verifyToken, sub )
 router.get("/tags", getByTag ) //get videos by tags
 router.get("/search", search ) //get videos by search



export default router;