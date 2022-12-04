const db = require("../models");
const Review = db.reviews;
const Product = db.product;

//Function  
//! Add Review

const  addReview = async (req,res)=>{
    const id = req.params.id
    let data = {
        product_id: id,
        rating: req.body.rating,
        description:req.body.description
        
    }
    const review = await Review.create(data)
    res.status(200).send(review)
}

//2 Get All Reviews
const getAllReviews= async (req,res)=>{
    let reviews;
    try {
        reviews = await Review.findAll({});
    } catch (e) {
        console.log(e);
    }
    res.status(200).send(reviews);
}

const getProductReview = async (req,res)=>{
    const id = req.params.id;
    const data= await Product.findOne({
        include:[{
            model: Review,
            as : 'reviews'
        }],
        where: {id:id}
    });
    res.status(200).send(data);
}

//3 Delete Review
const deleteReview = async (req,res)=>{
    let id = req.params.id
   let reviews = await Review.destroy({
        where: { id: id }
    });
    res.status(200).send("review is Deleted");
}

module.exports = {
    addReview,
    getAllReviews,
    deleteReview,
    getProductReview
}