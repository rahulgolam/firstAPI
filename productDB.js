require('dotenv').config();

const connectDB = require('./db/connect');

const products = require('./models/products');

const productsJson = require('./products.json')

const start = async () =>

{

    try {

            await connectDB(process.env.MONGODB_URL);

            await products.deleteMany();

            await products.create(productsJson);

            console.log('success');


        
    } catch (error) {
        
        console.log(error);

    }
}

start();