const mysql = require('mysql');
const connection = mysql.createConnection({
  host: process.env.RDS_HOSTNAME||'localhost',
  user: process.env.RDS_USERNAME||'root',
  password: process.env.RDS_PASSWORD||'Bruins2011!',
  database: process.env.RDS_DB_NAME||'bestbuy',
  port: process.env.RDS_PORT||3306,
});
connection.connect((err)=>{
  if (err){
    console.log('DB CONNECTION FAILED',err)
    return;
  }
  console.log('Connected to DB')
});
const getProductInfo= (callback)=>{
  connection.query('SELECT * FROM product', (err, productInfo)=> {
    if (err) {
      console.log('could not find', err);
      callback(err, null);
    }else{
    callback(null,productInfo);
  }
})
};

module.exports.getProductInfo = getProductInfo;
