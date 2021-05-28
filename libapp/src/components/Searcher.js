import React, {useState, useEffect} from 'react';
import {TextField, Button} from '@material-ui/core';
import axios from 'axios';
import Item from './Item'

export default function Searcher(){

  const [book, setBook] = useState(null);
  const [bookList,setBookList] = useState(null);
  const axios = require('axios').default;

  useEffect(() => { 
    console.log(bookList);
  },[bookList])

  function handleClick(){
    axios.get('http://localhost:8080/books/search',{
      params:{
        bookName:book
      }
    })
    .then(function (resp){
      setBookList(resp.data);
    })
  }

  return(
    <div>
      <br></br>
      <TextField
        variant="outlined"
        label="Book Name"
        onChange={(e)=>setBook(e.target.value)}
      />
      <br></br><br></br>
      <Button 
        variant="contained" 
        color="primary"
        onClick={handleClick}
      >
        Search
      </Button>
    </div>
  )
}