
import React, { useEffect, useRef,useState } from 'react';

import './App.css';
const axios = require("axios");




function App() {
  const [weatherInfo,setWeatherInfo]=useState(null)
  const inputRef=useRef(null)
  const [Image,setImage]=useState(null)
  //render once 
  useEffect(()=>{
fetchWeatherInfo()
  },[])
  useEffect(()=>{
if(weatherInfo?.current?.feelslike_c<0){
setImage("https://images.unsplash.com/photo-1514632595-4944383f2737?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8d2VhdGhlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=1000&q=60")
}else if(weatherInfo?.current?.feelslike_c<10){
  setImage("https://images.unsplash.com/photo-1527482797697-8795b05a13fe?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fHdlYXRoZXJ8ZW58MHx8MHx8&auto=format&fit=crop&w=1000&q=60")

}else{
  setImage("https://images.unsplash.com/photo-1601134467661-3d775b999c8b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8d2VhdGhlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=1000&q=60")
}
  },[weatherInfo])
  const fetchWeatherInfo=async (e)=>{
    //only do e.preventDefault when event is done which is done when you click the button
    //e&&e.preventDefault()
    e?.preventDefault()
    const options = {
      method: 'GET',
      url: 'https://weatherapi-com.p.rapidapi.com/forecast.json',
      params: {q: inputRef.current.value||"London", days: '3'},
      headers: {
        'X-RapidAPI-Key': '8cb683f5d8mshca3a682bccc706bp1040d8jsn03538f68c68c',
        'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com'
      }
    };
    try{
      const response=await axios(options)
      setWeatherInfo(response.data)
    }catch(err){
      console.log(err)
    }
  }
  
  
  return (
    <div className="app" style={{backgroundImage:`url(${Image})`}}>
      <h1>Our Weather App</h1>
      <div className='app__container'>
      <form>
      <input ref={inputRef} type='text' placeholder='Type the City'/>
      <button onClick={fetchWeatherInfo}>Show me the Weather</button>
      </form>
     
      
      <p className='data'><strong>Location : {weatherInfo?.location?.name}</strong></p>
      <p className='data'><strong>Time : {weatherInfo?.location?.localtime}</strong></p>
      <p className='data'><strong>Temperature : {weatherInfo?.current?.feelslike_c} Degree Celsius</strong></p>
      </div>
    </div>
  );
}

export default App;
