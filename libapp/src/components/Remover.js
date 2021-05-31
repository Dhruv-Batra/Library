import {Button} from '@material-ui/core'
import axios from 'axios'

export default function Remover({docid,setLibList2}){

    function handleClick(){
        axios.delete('http://localhost:8080/books/remove',{
            params : {
                docid:docid
            },
        })
        .then(function(resp){
            return setLibList2((Math.random().toString(36)+'00000000000000000').slice(2, 12));
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