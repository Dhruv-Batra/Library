import React, {useEffect,useState} from 'react'
import axios from 'axios'
import LibItem from './LibItem'

export default function Library(){ 

    const [libList, setLibList] = useState([]);
    const[update,didUpdate] = useState(false);

    useEffect(()=>{
        const url = 'http://localhost:8080/books/library'
        axios.get(url)
        .then(function (resp){
            setLibList(resp.data);
        })
    },[])

    return(
        <div>
            <LibItem
                bookList={libList}
            />
        </div>
    )
}