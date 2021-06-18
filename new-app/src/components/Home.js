import React,{useState,useEffect} from 'react'
import { Link } from 'react-router-dom';


const Home = () => {
    const [newClip,setNewClip] = useState([])
    useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(setNewClip)
    .catch(err=>{
        console.log(err)
    })
   
    },[])
    return (
        <div className ='boxs'>
            {newClip.map((item,i)=>{
                return(<Link to='/register' className='box grow' key={i}>
                     <h1>Clickme to see ......</h1>
                </Link>)
            })}
        </div>
    )
}

export default Home
