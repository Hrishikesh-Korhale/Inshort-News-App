import { data } from "./constants/data.js";
import news from "./model/news-schema.js";

const DefaultData = async() => {
    try{
        await news.insertMany(data);
        console.log('Data imported successfully ');
    }catch(error){
        console.log('error: ', error.message);
    }

}

export default DefaultData; 