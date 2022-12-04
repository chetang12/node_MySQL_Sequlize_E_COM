
const db = require("../models");
//image Upload
const multer = require('multer')
const path = require('path');
const { type } = require("os");

//create main Model
const Product = db.product;
const Review = db.reviews;
const Op = db.Op;


// 1. create add product function 
const addProduct = async (req, res) => {

        let info = {
            image:req.file.path, //for single img if multiple img write only rewq.file
            title: req.body.title,
            price: req.body.price,
            description: req.body.description,
            published: req.body.published ? req.body.published : true // user not set published as ture then take as default false
        }
        let product = await Product.create(info);
        res.status(201).send(product);  
    
}



//2.  get all products
const getAllProduct = async (req, res) => {
    try {
        let products = await Product.findAll({});
        res.status(200).send(products); 
    } catch (error) {
        res.status(500).send("error"+error);
    }
}


//3. get single Product

const getOneProduct = async (req, res) => {
    let id = req.params.id
    let product = await Product.findOne({
        where: { id: id }
    });
    res.status(200).send(product);

}
//4. Update Product

const updateProduct = async (req, res) => {
    let id = req.params.id
    let product = await Product.update(req.body, {   //!we also use upsert() Method we get update values in response,  we also Use update() 
        where: { id: id }
    });
    res.status(200).send(product);

}

//5 delete Product

const deleteProduct = async (req, res) => {
    let id = req.params.id;
    let product = await Product.destroy({
        where: { id: id }
    });
    res.status(200).send("product is delete");

}

//6 Published Product
const getPublishedProduct = async (req, res) => {
    const product = await Product.findAll({
        where: {
            published: true

        }
    })
    res.status(200).send(product);

}
//7 Connect One To Many relation Product and  Review 
const getProductReview = async (req,res)=>{
    // let title = req.params.title;
    let id = req.params.id;

    const data = await Product.findOne({
        include: [{ 
            model: Review,
            as:'reviews',
        }],
        where: {
            [Op.or]: {
                id: id,
                title: id
            }
            // title:title
        }
    })
    res.status(200).send(data);
}

// 8 Upload Image Controller
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'Images')
    },
    filename: (req, file, cb) => {
        cb(null, Date.now() + path.extname(file.originalname))
    }
})

const upload = multer({
    storage: storage,
    limits: { fileSize: '1000000' },
    fileFilter: (req, file, cb) => {
        const fileTypes = /jpeg|jpg|png|gif/
        const mimeType = fileTypes.test(file.mimetype)  
        const extname = fileTypes.test(path.extname(file.originalname))

        if(mimeType && extname) {
            return cb(null, true)
        }
        cb('Give proper files formate to upload')
    }
}).single('image')

   //we can use array('image',3) for multiple image
module.exports = {
    addProduct,
    getAllProduct,
    getOneProduct,
    updateProduct,
    deleteProduct,
    getPublishedProduct,
    getProductReview,
    upload
}