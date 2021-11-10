import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './page/Home';
import Detail from './page/Detail';



function App() {


  return (
    <div className="App">
      <Routes>
        <Route exact path="/" component={Home} /> 
        <Route path ="/detail/:id" component={Detail}/>
      </Routes>
    </div>

  );
}

export default App;
