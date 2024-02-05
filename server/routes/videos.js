import express from 'express'
import { addVideo, deleteVideo, getVideo, updateVideo } from '../controllers/video.js';
import { verifyToken } from '../verifyToken.js';

const router = express.Router();

 // Create a video
 router.post("/", verifyToken, addVideo )
 router.delete("/:id", verifyToken, deleteVideo )
 router.put("/:id", verifyToken, updateVideo )
 router.get("/find/:id", getVideo )
 router.put("/view/:id", getVideo )
 router.get("/trend", getVideo )
 router.get("/random", getVideo )
 router.get("/sub", getVideo )



export default router;