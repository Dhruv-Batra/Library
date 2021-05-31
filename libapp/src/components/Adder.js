import {Button} from "@material-ui/core"
import axios from "axios"
import {useState} from "react"

export default function Adder({title,authors,bookList,setBookList}){

    function handleClick(){
        axios.post('http://localhost:8080/books/add',{
            params:{
                title:title,
                authors:authors,
            },
        })
        .then(function (resp){
            console.log(resp.data)
        })
        .then(function(resp){
            removeBook();
        })
    }

    function removeBook(){
        for(var i=0;i<bookList.length;i++){
            if(bookList[i].volumeInfo.title===title&&bookList[i].volumeInfo.authors===authors){
                var removeme = i
                break;
            }
        }
        bookList.splice(removeme,1);
        // setBookList(()=>{
        //     return bookList;
        // });
    }

    return(
        <div>
            <Button
                variant="contained"
                color="primary"
                onClick={handleClick}
            >
                Add to Library
            </Button>
        </div>
    )
}