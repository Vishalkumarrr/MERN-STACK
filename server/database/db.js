import mongoose from "mongoose";


export const Connection = async (username, password) => {
    const URL = `mongodb+srv://${username}:${password}@ecommerce-web.zhrjq5a.mongodb.net/?retryWrites=true&w=majority`;
    try {
        await mongoose.connect(URL, {  useNewUrlParser: true });
        console.log('Database connected Successfully');
    } catch (error) {
        console.log('Error while connecting with the database', error.message);
        console.log(error)
    }
}

export default Connection;