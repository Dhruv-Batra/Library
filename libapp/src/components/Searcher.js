import React, {useState, useEffect} from 'react';
import {TextField, Button} from '@material-ui/core';
import axios from 'axios';
import Item from './Item'

export default function Searcher(){

  const [book, setBook] = useState(null);
  const [bookList,setBookList] = useState([]);
  const axios = require('axios').default;

  function handleClick(){
    axios.get('http://localhost:8080/books/search',{
      params:{
        bookName:book
      }
    })
    .then(function (resp){
      setBookList(resp.data);
    })
    .catch(function(e){
      alert('No Results Found');
      window.location.reload();
    })
  }

  useEffect(()=>{
    console.log(bookList)
  },[bookList])

  return(
    <div>
      <br></br>
      <TextField
        variant="outlined"
        label="Book Name or Author"
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
      {bookList.length>0?(
        <Item
        bookList={bookList}
      />
      ):<div></div>}
    </div>
  )
}