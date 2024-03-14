import React, { useState, useEffect } from 'react';
import bg from './assets/bg.jpg';
import './App.css'
import axios from 'axios';

function UserScreen() {
  const [name, setName] = useState('');

  const fetchData = async () => {
    try {
      const response = await axios.get("https://nice-puce-leopard-hem.cyclic.app/getData");
      setName(response.data);
      console.log(response.data, 'getting data');
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  setInterval(() => {
    // Your function logic here
    fetchData();
    console.log('This function runs every 3 seconds');
  }, 5000);

  return (
    <>
    <div
      className="h-screen"
      style={{
        backgroundImage: `url(${bg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}
    >
      {/* <div className="absolute top-0 left-0 right-0 bottom-0"></div> */}
      
        
    
</div>

        <div className="z-10  text-center">
            <h1 className="text-[95px] absolute top-[330px] left-[550px]  text-[#daa000] font-bold Gotham-Bold m-0 p-0">{name ? name.name : '' }</h1>
            <p className='text-[55px] absolute top-[450px] left-[700px] text-[#daa000] font-bold Gotham-Bold m-0 p-0'>{name ? name.companyName : ''}</p>
        </div>

        </>

  );
}

export default UserScreen;
