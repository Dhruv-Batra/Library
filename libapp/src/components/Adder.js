import {Button} from "@material-ui/core"
import axios from "axios"
import {useState} from "react"

export default function Adder({title,authors,bookList,setBookList}){

    const [isClicked,setIsClicked] = useState("Add to Library");

    function handleClick(){
        axios.post('http://localhost:8080/books/add',{
            params:{
                title:title,
                authors:authors,
            },
        })
        .then(function (resp){
            console.log(resp.data);
        })
        .then(function(resp){
            setIsClicked("Added to Library");
        })
    }

    return(
        <div>
            <Button
                variant="contained"
                color="primary"
                onClick={handleClick}
            >
                {isClicked}
            </Button>
        </div>
    )
}