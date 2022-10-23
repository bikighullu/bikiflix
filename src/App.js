import React from 'react';
import './App.css';
import Row from './Row';
import requests from './requests';

function App() {
  return (
    <div className="App">
     <h1> Hello Biki</h1>

     <Row title = "BIKIFLIX ORIGINALS" fetchUrl={requests.fetchNetflixOriginals}/>
     <Row title= "Trending Now" fetchUrl={requests.fetchTrending}/>

    </div>
  );
}

export default App;
