const Product = require('../model/product');

// Get all products 
exports.getProducts = (req,res,next) => {
    Product.find({}).then((result) => {
        res.send(result);
    }).catch(err => {
        console.log(err);
    })
}

//Get one product
exports.getProduct =  (req,res,next) => {
    const id = req.params.prodId;
    Product.findById({_id: id}).then(result => {
        res.send(result);
    }).catch(err => {
        res.send("No product found");
    })
};

//Add new product
exports.postProduct = (req,res,next) => {
//Checking if product Aready exist
    Product.find({name: req.body.name}).then((result) => {
        if(result.length){
            return res.send("Product Already Exist");
        }
    const product =  new Product({
        name: req.body.name,
        description: req.body.description,
        cost:  req.body.cost,
        category: req.body.category
    })
    product.save().then(result => {
        res.send(result);
    }).catch(err => {
        console.log(err);
    });
    }).catch(err => {
        res.send(err);
    });
}

//Delete A product
exports.deleteProduct = (req,res,next) => {
    Product.findByIdAndRemove({_id: req.params.prodId}).then(result => {
    if(result === null){
        return res.send("No Such Product Exists");
    }
    res.send("Product Deleted Success");

    }).catch(err => {
        res.send(err);
    })
}