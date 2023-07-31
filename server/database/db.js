import mongoose from "mongoose";

const Connection = async(username,password) => {
    const URL = `mongodb+srv://${username}:${password}@clone-inshort-newsapp.cgtg1a0.mongodb.net/?retryWrites=true&w=majority`;
    try{
        await mongoose.connect(URL, {useNewUrlParser: true});
        console.log('Database connected succesfully');
    }catch(error){
        console.log('error while connecting database',error.message);

    }
}

export default Connection;