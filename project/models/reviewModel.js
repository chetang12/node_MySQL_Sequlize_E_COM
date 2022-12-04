

module.exports=(sequelize,DataTypes)=>{

    const Review= sequelize.define("review",{
        rating:{
            type: DataTypes.INTEGER,
            allowNull:false
        },
   
    description:{
        type: DataTypes.TEXT 
    }
 }
 )
return Review;
}