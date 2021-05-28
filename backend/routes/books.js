var express = require('express');
var router = express.Router();
const axios = require('axios');

const book_key = process.env.BOOK_KEY;

router.get('/search', function (req, res){
    var queryParam = req.query;
    const url='https://www.googleapis.com/books/v1/volumes?q='+queryParam.bookName+'+intitle:keyes&key='+book_key;
    axios.get(url)
    .then(resp => {
        res.send(resp.data.items);
    })
});

module.exports= router;