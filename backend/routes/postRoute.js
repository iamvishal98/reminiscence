import express from "express";
import { createPosts, getPosts } from "../controllers/postControllers.js";
import multer from "multer";

const router = express.Router();
const upload = multer({ dest: "uploads/" });

router.get("/", getPosts);
router.post("/", upload.array("selectedFiles", 12), createPosts);

export default router;
