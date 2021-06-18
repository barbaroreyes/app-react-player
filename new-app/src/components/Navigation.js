import React from 'react';
import { Link } from 'react-router-dom';

const Navigation = () => {
    return (
        <div className="navigation br2 ma3">
           <Link to='/'>Home</Link>
           <Link to='/categories'>Categories</Link>
           <Link to='/'>Home</Link>
        </div>
    )
}

export default Navigation
