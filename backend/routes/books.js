var express = require('express');
var router = express.Router();
const axios = require('axios');
const db = require('../firebase')
const nanoid =  require('nanoid');

const book_key = process.env.BOOK_KEY;

router.get('/search', function (req, res){
    var queryParam = req.query;
    const url='https://www.googleapis.com/books/v1/volumes?q='+queryParam.bookName+'+intitle:keyes&key='+book_key;
    axios.get(url)
    .then(resp => {
        res.send(resp.data.items);
    })
});

router.get('/library', async (req,res) => {
    const target = db.collection('user1');
    const snapshot = await target.get();
    const shelf = [];
    snapshot.forEach((doc) => {
        //shelf[doc.id]=doc.data();
        shelf.push(doc.data());
    });
    res.send(shelf);
})

router.post('/add', async (req, res) => {
    const data = {
        title: req.body.params.title,
        author: req.body.params.authors,
    };
    await db.collection('user1').doc(nanoid()).set(data); //fix nanoid
    res.sendStatus(temp.id);
})

module.exports= router;