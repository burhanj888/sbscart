import mongoose from 'mongoose';

// const Connection = async (username, password) => {
 const Connection = async () => {
        const URL = `mongodb+srv://burhanj888:VYvRfvRL7IlJHCVc@bitcart.ed6gd.mongodb.net/BITCart?retryWrites=true&w=majority`;
        // `mongodb+srv://${username}:${password}@cluster0.jjowu.mongodb.net/flipkart?retryWrites=true&w=majority`
    try {
        await mongoose.connect(URL, { useUnifiedTopology: true, useNewUrlParser: true, useFindAndModify: false });
        console.log('Database Connected Succesfully');
    } catch(error) {
        console.log('Error: ', error.message);
    }

};

export default Connection;