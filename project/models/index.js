const  dbConfig=require("../config/dbConfig.js");
const {Sequelize,DataTypes, Op}=require("sequelize");
const sequelize = new  Sequelize(
    dbConfig.DB,
    dbConfig.USER,
    dbConfig.PASSWORD,
    {
        host: dbConfig.HOST,
    dialect: dbConfig.dialect,
    operatorsAliases:false,
    pool:{
        max:dbConfig.pool.max,
        min:dbConfig.pool.min,
        acquire:dbConfig.pool.acquire,
        idle:dbConfig.pool.idle

    }
    }
)
sequelize.authenticate().then(()=>{
    console.log('conected...')
}).catch((err)=>{
    console.log("Error"+err);
})

const  db ={}
db.Sequelize =Sequelize;
db.sequelize =sequelize;
db.product = require('./productModel.js')(sequelize,DataTypes);
db.reviews = require('./reviewModel.js')(sequelize,DataTypes);
db.users = require('./userModel.js')(sequelize, DataTypes);

db.Op = Op; 
db.sequelize.sync()  //if force is equle to true is delete the data every time when user hit the req
.then(()=>{
    console.log('yes re-sync done!')
});

// 1 to Many Relation 
db.product.hasMany(db.reviews,{
    foreignKey:'product_id',
    as:'reviews'
});
db.reviews.belongsTo(db.product,{
    foreignKey:'product_id',
    as:'product'
});
// 1 to Many Relation 

// db.Cart.hasMany(db.product,{
//     foreignKey:'product_id',
//     as:'cart'
// });
// db.product.belongsTo(db.Cart,{
//     foreignKey:'product_id',
//     as:'product'
// });

module.exports = db;
