const axios = require("axios");
const router = require("express").Router();

router.get("/api/products", (req, res) => {
  axios
    .get("http://localhost:3000/api/products/", { params: req.query })
    .then((data) => {
        console.log('data', data);
        res.json(data)
    })

    .catch(err => res.status(422).json(err));
});

module.exports = router;