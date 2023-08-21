import technologynews from "../model/technnologyNews-schema.js";

export const technnologyGetNews = async(request,response) => {
        try{
         let technologydata =  await technologynews.find({});
         response.status(200).json(technologydata);
        }catch(error){
            response.status(500).json({message: error.message});
        }
} 