import React, { useState } from 'react'
import { Route, Routes } from 'react-router-dom';
import Navigation from './components/Navigation';
import './App.css';
import MoviesList from './components/MoviesList';
import {Data} from './Data';
import Home from './Home';
function App() {
 const [Movies, setMovies] = useState(Data);
 const [search, setSearch] = useState("");
  return (
    <div className='app'>

        <Navigation setSearch={setSearch}/>
        
        <div className='bodyy'>

        </div>

        <Routes>
        <Route path='/' element={<Home Movies={Movies} search={search}/>}/>

        <Route path='/movies' element={<MoviesList Movies={Movies} search={search}/>}/>
    </Routes>
    </div>
  );
}

export default App

