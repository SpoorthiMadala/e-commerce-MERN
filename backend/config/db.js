import mongoose from 'mongoose';

const connectDB = async () => {
    try {
        mongoose.set('strictQuery', true); 
        const conn = await mongoose.connect(process.env.MONGODB_URI);
        console.log(`MongoDB Connected: ${conn.connection.host} in ${process.env.NODE_ENV} mode`);
    } catch (err) {
        console.error(`MongoDB Connection Error: ${err.message}`);
        process.exit(1);
    }
};

export default connectDB;
