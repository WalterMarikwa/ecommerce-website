const router = require("express").Router();
const mysql = require("mysql");

var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: process.env.MYPASSWORD,
    database: "db_schema"
});

const DB = `
SELECT 

    products.product_id, 
    products.product_type, 
    price.item_price, 
    products.description_type,
    products.image,
    price.price_date 

FROM products 
INNER JOIN price 
ON products.product_id = price.price_id`

connection.connect(function (err) {
    if (err) throw err;
    console.log("connected as id " + connection.threadId);
});


router.get('/products', (req, res) => {
    connection.query(DB,function (err, data) {
        if(err){
            console.log(err)
            return res.status(500).send(err)
        } else {
            res.json(data)
        }     
    })
});

router.get('/products/:product_id', (req, res) => {
    let item = req.params.product_id
    connection.query("SELECT product_id, category, product_type, description_type FROM products WHERE product_id = ?", [item], function (err, data) {
        res.json(data)
    })
});

router.get('/contacts', (req, res) => {
    connection.query("SELECT * FROM contacts", function (err, data) {
        res.json(data)
    })
});

router.get('/productfilter', (req, res) => {
   let item = req.query.productID
    connection.query("SELECT * FROM products WHERE product_id = ?", [item], function (err, data) {
        if (err) {
            res.status(500).json("Sorry")
        }
        res.json(data)
    })
});


module.exports = router;
