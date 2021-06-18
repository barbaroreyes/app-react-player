import React from 'react'
import {Switch,Route,Link} from 'react-router-dom'
import Home from './components/Home';
import Navigation from './components/Navigation';
import Categories from './components/Categories';
import Category from './components/Category';
import Video from './components/VIdeo';
import './App.css';

function App() {
  return (
    <div className="App">
      <Navigation/>
     <Switch>
       <Route exact path="/">
       
         <Home/>
       </Route>
       <Route exact path="/categories">
        <Categories/>
       </Route>
       <Route exact path='/category'> 
       <Category/>
       </Route>
       <Route path='/:item'>
         <Video/>
       </Route>
     </Switch>
    </div>
  );
}

export default App;
