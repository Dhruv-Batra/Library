import React, {useEffect,useState} from 'react'
import axios from 'axios'
import LibItem from './LibItem'

export default function Library(){ 

    const [libList, setLibList] = useState([]);

    useEffect(()=>{
        const url = 'http://localhost:8080/books/library'
        axios.get(url)
        .then(function (resp){
            console.log(resp.data)
            setLibList(resp.data);
        })
        .then(function (resp){
            console.log(libList);
        })
    },[])

    return(
        <div>
            <LibItem
                bookList={libList}
                setLibList={setLibList}
            />
        </div>
    )
}