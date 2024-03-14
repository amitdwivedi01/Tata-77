import React, { useState, useEffect } from 'react';
import io from 'socket.io-client';
import bg from './assets/bg.jpg';
import './App.css'

function UserScreen() {
  const [name, setName] = useState('');

  useEffect(() => {
    const socket = io('http://localhost:4000'); // Replace 'backend/socket' with your actual WebSocket server URL

    socket.on('dataUpdated', updatedName => {
      setName(updatedName);
      console.log(updatedName,'getting data');
    });

    return () => {
      socket.disconnect();
    };
  }, []);

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
            <h1 className="text-[95px] absolute top-[330px] left-[550px]  text-[#daa000] font-bold Gotham-Bold m-0 p-0">{name.name}</h1>
            <p className='text-[55px] absolute top-[450px] left-[700px] text-[#daa000] font-bold Gotham-Bold m-0 p-0'>{name.companyName}</p>
        </div>

        </>

  );
}

export default UserScreen;
