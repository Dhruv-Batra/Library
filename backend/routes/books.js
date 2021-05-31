var express = require('express');
var router = express.Router();
const axios = require('axios');
const db = require('../firebase')
const cryptoRandomString =  require('crypto-random-string');

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
    const rand = (Math.random().toString(36)+'00000000000000000').slice(2, 12);
    const data = {
        id: rand,
        title: req.body.params.title,
        authors: req.body.params.authors,
    };
    await db.collection('user1').doc(rand).set(data);
    res.sendStatus(200);
})

router.delete('/remove', async (req, res) => {
    await db.collection('user1').doc(req.query.docid).delete();
    res.sendStatus(200);
})

module.exports= router;