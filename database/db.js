import mongoose from 'mongoose';
import dotenv from 'dotenv';
dotenv.config();

const Connection = async () => {
    const URL =process.env.MONGODB_URI|| `mongodb://blog:blog@ac-npngtts-shard-00-00.rf5z8cf.mongodb.net:27017,ac-npngtts-shard-00-01.rf5z8cf.mongodb.net:27017,ac-npngtts-shard-00-02.rf5z8cf.mongodb.net:27017/?ssl=true&replicaSet=atlas-bp3g0y-shard-0&authSource=admin&retryWrites=true&w=majority`;
    try {
        await mongoose.connect(URL, { useNewUrlParser: true })
        console.log('Database connected successfully');
    } catch (error) {
        console.log('Error while connecting to the database ', error);
    }
};

export default Connection;