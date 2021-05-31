import {Button} from '@material-ui/core'
import axios from 'axios'

export default function Remover({docid,setLibList}){

    function handleClick(){
        axios.delete('http://localhost:8080/books/remove',{
            params : {
                docid:docid
            },
        })
    }

    return(
        <div>
            <Button
                variant="contained"
                color="secondary"
                onClick={handleClick}
            >
                Remove from Library
            </Button>
        </div>
    )
}