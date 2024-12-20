//import logo from './logo.svg';
import './App.css';
import React from 'react';
import Navbar from './components/navbar';


function App() {
  return (
    <div>
      <Navbar />
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          height: 'calc(100vh - 64px)', // Tinggi layar dikurangi tinggi navbar
          textAlign: 'center',
        }}
      >
        <h1>Selamat Datang di Simple Scheduler</h1>
        <p>Kelola jadwal Anda dengan mudah!</p>
        <p>Silakan Mulai menggunakan web ini</p>
      </div>
    </div>
  );
}


export default App;
