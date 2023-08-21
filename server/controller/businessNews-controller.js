import businessnews from "../model/businessNews-schema.js";

export const businessgetNews = async(request,response) => {
        try{
         let data =  await businessnews.find({});
         response.status(200).json(data);
        }catch(error){
            response.status(500).json({message: error.message});
        }
} 