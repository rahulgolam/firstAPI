const { query } = require('express');
const products = require('../models/products');

const getAllProducts = async (req,res)=>

{
    const data=await products.find({});

    res.status(200).json({data}) ;

}


const getAllProductsTesting = async (req,res)=>

{
      const {company , name , featured} = req.query

      const qobj = {};

//      console.log(company);


      if(company)
      {
        qobj.company=company;

        //console.log(qobj);
      }

      if(featured)
      {
        qobj.featured=featured;

        //console.log(qobj);
      }

      
      if(name)
      {
        qobj.name={ $regex : name , $options : "i" }

        //console.log(qobj);
      }

   
   


    const data=await products.find(qobj).sort("-name");

    res.status(200).json({data}) ;

}



module.exports={getAllProducts,getAllProductsTesting};