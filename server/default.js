import { data } from "./constants/data.js";
import {businessdata} from "./constants/businessdata.js";
import {technologydata} from "./constants/technologydata.js";

import news from "./model/news-schema.js";
import businessnews from "./model/businessNews-schema.js";
import technologynews from "./model/technnologyNews-schema.js";


const DefaultData = async() => {
    try{
        await news.insertMany(data);
        console.log('data imported successfully ');
    }catch(error){
        console.log('error: while importing data ', error.message);
    };
    try{
        await businessnews.insertMany(businessdata);
        console.log('businessdata imported successfully ');
    }catch(error){
        console.log('error: while importing data ', error.message);
    };
    try{
        await technologynews.insertMany(technologydata);
        console.log('technologydata imported successfully ');
    }catch(error){
        console.log('error: while importing data ', error.message);
    }

}

export default DefaultData; 