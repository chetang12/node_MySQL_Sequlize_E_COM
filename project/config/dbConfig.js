// data base Info
module.exports ={
    HOST:'localhost',
    USER:'root',
    PASSWORD:'root',
    DB: 'node_sequelize_api_db',
    dialect:'mysql', //what type of data base we use we postgresql mysql like that
    pool :{
        max:5,  //maximum pool we use 5
        min:0, //min 0
        acquire:30000,
        idle:10000
    }
}