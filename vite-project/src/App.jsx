import { useState } from 'react'
import React from 'react';
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css';
import Form from './Form';
import Card from './Card';

function App() {
  const [praktikan, setPraktikan] = React.useState(null);
  const addPraktikanHandler = (data) => {
    console.log(data);
    setPraktikan(data);
  };
  const removePraktikanHandler = () => {
    setPraktikan(null);
  };
  return (
    <div className="App">
      <h1>Kartu Praktikan</h1>
      <Form onAddPraktikan={addPraktikanHandler} />
      {praktikan && <>
        <button className="delete"
          onClick={removePraktikanHandler}> Hapus </button>
        <Card nama={praktikan.nama}
          kelompok={praktikan.kelompok} />
      </>}
    </div>
  );

}

export default App
