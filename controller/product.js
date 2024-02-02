const model = require('../model/product.js');
const Product = model.Product;

exports.createProduct = async (req, res)=>{
  try {
    const product = new Product(req.body);
  
    const data = await product.save();
    //          or
    // product.save().then((data)=> res.json(data)).catch(err=> res.json(err));
    //          or
    //  product.save((err, doc)=>{ callback under Model.prototype.save() is no longer supported
    //   res.json(doc)
    // });
  
      res.json(data);
  } catch (error) {
    console.log("erorore",error.message);
    res.json(error);
  }
 
  }
  
  exports.getAllProducts = async (req, res)=>{
  const products = await Product.find();

  res.json(products);
  }
  
  exports.getProduct =async (req, res)=>{
    console.log(req.params);
    // const product = await Product.findOne({'_id': req.params.id});
    const product = await Product.findById(req.params.id);
    res.json(product)
  }
  
  exports.replaceProduct = async (req, res)=>{
    console.log(req.params)
    try {
      const product = await Product.findOneAndReplace({'_id': req.params.id}, req.body, {new: true});
      res.json(product);
    } catch (error) {
     console.log(error);
     res.json(error) 
    }
    }
  
    exports.updateProduct = async (req, res)=>{ 
      console.log(req.params)
      try {
        const product = await Product.findOneAndUpdate({'_id': req.params.id}, req.body, {new: true});
        res.json(product);
      } catch (error) {
       console.log(error);
       res.json(error) 
      }
      }
  
    exports.deleteProduct = async (req, res)=>{
      console.log(req.params)
  
      try {
        const product = await Product.findOneAndDelete({'_id': req.params.id});
        res.json(product);
      } catch (error) {
       console.log(error);
       res.json(error) 
      }
  }