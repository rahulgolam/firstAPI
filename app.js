
require('dotenv').config();

const express = require('express');

const app = express();

const connectDB = require('./db/connect');

const routes = require('./routes/products')


const port = 3000 || process.env.PORT;

app.get('/',(req,res)=>
{

    res.send("Hello All");
})


app.use('/api/products',routes);


        
const start = async () =>

{

    try {

        await connectDB(process.env.MONGODB_URL);

        app.listen(port,()=>{

            console.log(`${port} is live`);
        })

        
    } catch (error) {
        
        console.log(error);
    }
}

start();
