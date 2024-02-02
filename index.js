require('dotenv').config();
const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');
const productRouter = require("./routes/product.js");
const cors = require("cors");

const server = express();

//db connection
main().catch(err => console.log(err));
async function main() {
  await mongoose.connect(process.env.MONGO_URL);
  console.log('database connected'); 
}




server.use(cors());
server.use(express.json());  
server.use(morgan('default')); 
server.use('/products', productRouter); 










server.listen(process.env.PORT, ()=>{
    console.log('server started');
});