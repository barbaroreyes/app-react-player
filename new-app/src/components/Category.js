import React,{useState,useEffect} from 'react'
import { Link } from 'react-router-dom';

const Category = () => {
    const [movie,setMovie] =useState([])
    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(setMovie)
        .catch(err=>{
            console.log(err)
        })
       
        },[])
   
    return (
        <div className='categories-dad'>
          {movie.map((item,i)=>{
              return (<Link to='/item' key={i} className="categories-chil">{item.name}</Link>)
          })}
        </div>
    )
}

export default Category