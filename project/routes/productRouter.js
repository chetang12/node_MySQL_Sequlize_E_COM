//Import Controller review ,product
const productController =require('../controllers/productController')
const reviewController = require('../controllers/reviewController');
const UserController = require('../controllers/userController');
//router 
const router = require('express').Router();
//router methods

router.post('/addUser',UserController.createUser)

router.post('/loginUser',UserController.loginUser)
//Product Routers
router.post('/addProduct',productController.upload , productController.addProduct);
router.get('/allProducts',productController.getAllProduct);
router.get('/published',productController.getPublishedProduct);

//get Product Review
router.get('/getProductReview/:id',reviewController.getProductReview);
//review Routers
router.get('/getAllreview',reviewController.getAllReviews);
router.post('/addreview/:id',reviewController.addReview);
router.delete('/deleteReview/:id',reviewController.deleteReview);


router.get('/:id',productController.getOneProduct);
router.put('/:id',productController.updateProduct);
router.delete('/:id',productController.deleteProduct);


module.exports =router