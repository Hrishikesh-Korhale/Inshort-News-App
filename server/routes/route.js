import express from "express";
import { getNews } from "../controller/news-controller.js";
import { businessgetNews } from "../controller/businessNews-controller.js";
import {technnologyGetNews} from "../controller/technnologyGetNews.js";


const route = express.Router();

route.get('/news',getNews);

route.get('/business',businessgetNews);

route.get('/technology',technnologyGetNews);

export default route;