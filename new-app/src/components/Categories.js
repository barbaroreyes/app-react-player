import React,{useState,useEffect} from 'react'
import { Link } from 'react-router-dom';

const Categories = () => {
    const categories =[{
        name:'action',image:''
    },{name:'action',image:''},{name:'anime',image:''},{name:'dramas',image:''},{name:'sports',image:''},{name:'musicals',image:'Sci-fi'},{name:'History',image:''}];
    return (
        <div className='categories-dad'>
          {categories.map((item,i)=>{
              return (<Link to='/category' key={i} className="categories-chil">{item.name}</Link>)
          })}
        </div>
    )
}

export default Categories
