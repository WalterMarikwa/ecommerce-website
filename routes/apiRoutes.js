const router = require("express").Router(); 
const mysql = require("mysql");

// Connection to MySql database.
var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: process.env.MYPASSWORD,
    database: "db_schema"
});

// A variable named DB that has a query that joins products with prices.
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

// Get method endpoint, localhost:3000/products
connection.connect(function (err) {
    if (err) throw err;
    console.log("connected as id " + connection.threadId);
});

// Get method located in the DB varible.
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

// Get method which runs and returns a database object by using id.
// Get method endpoint, localhost:3000/products/<number>
router.get('/products/:product_id', (req, res) => {
    let item = req.params.product_id
    connection.query("SELECT product_id, category, product_type, description_type FROM products WHERE product_id = ?", [item], function (err, data) {
        if(err){
            console.log(err)
            return res.status(500).send(err)
        } else {
            res.json(data)
        }  
    })
});

// Get method that runs a query which will return a contacts database for user. 
// Get method endpoint, localhost:3000/contacts
router.get('/contacts', (req, res) => {
    connection.query("SELECT * FROM contacts", function (err, data) {
        if(err){
            console.log(err)
            return res.status(500).send(err)
        } else {
            res.json(data)
        }  
    })
});

// Get method that a query that returns a json with strictly required key value pairs.
// Get ened point, localhost:3000/api/productfilter?productID=1
router.get('/productfilter', (req, res) => {
   let item = req.query.productID
    connection.query("SELECT * FROM products WHERE product_id = ?", [item], function (err, data) {
        if (err) {
            res.status(500).json("Sorry, No products meet that criteria.")
        }
        res.json(data)
    })
});

router.post('/contacts', (req, res) => {
    res.json(req.body)
    // connection.query("SELECT * FROM contacts.firstName, contacts.comments FROM contacts", function (err, data) {
    //     if(err){
    //         console.log(err)
    //         return res.status(500).send(err)
    //     } else {
    //         res.json(data)
    //     }  
    // })
});



// A variable that will be exposed as module.
module.exports = router;
