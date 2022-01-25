import express from 'express';
import { getPosts } from "../controller/routesDefinition.js";  // In node.js we need to add .js at the end unlike react
const router = express.Router();

router.get('/', getPosts)

export default router