import {Button} from "@material-ui/core"
import axios from "axios"

export default function Adder({title,authors}){

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