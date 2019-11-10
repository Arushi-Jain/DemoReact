import React from 'react';
import './App.css';
import Bucket from './components/buckets'
// import Card from './components/todocards'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Bucket name="App"/>
        <Bucket name="App"/>
        <Bucket name="App"/>
        <Bucket name="App"/>
        <Bucket name="App"/>
        <Bucket name="App"/>

        {/* <Card name="Arushi"/>
        <Card name="Arushi"/>
        <Card name="Arushi"/>
        <Card name="Arushi"/>
        <Card name="Arushi"/>
        <Card name="Arushi"/> */}
        {/* <Card name="Arushi"/> */}
        
      </header>         
    </div>
  );
}

export default App;
