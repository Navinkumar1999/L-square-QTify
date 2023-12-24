
import './App.css';
import React, { useEffect, useState } from 'react';
import Navbar from './components/Navbar/Navbar';
import { StyledEngineProvider } from '@mui/material';
import { Outlet } from "react-router-dom";
import { fetchNewAlbums, fetchTopAlbums, fetchsongs } from './api/api';


function App() {
  // const [searchData,setsearchData]=useState();
   const [data,setData]=useState({});

  const generateData =(key,source)=>{
    source().then((data)=>{
      setData((prevData)=>{
        return {...prevData,[key]:data}
      })
    })
  }

  useEffect(()=>{
    generateData("topAlbums",fetchTopAlbums);
    generateData("newAlbums",fetchNewAlbums);
    generateData("songs",fetchsongs);
  },[])


  const { topAlbums= [],newAlbums= [], songs = []} = data; 

  return(
  <>
  <StyledEngineProvider injectFirst>
    <Navbar searchData={[...topAlbums, ...newAlbums]}/>
    <Outlet context={{data: {topAlbums,newAlbums,songs} }}/>
  </StyledEngineProvider>
  </>
  ); 
}

export default App;
