import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import ResultPage from './components/ResultPage';
import MyHome from "./components/MyHome";

var finalB = 0, finalA = 0, finalC = 0;
function App() {
  function dataSetter(b,c,a){
    finalB = b;
    finalC = c;
    finalA = a;
  }
  return (
    <div>
    <BrowserRouter>
      <Route exact path ="/" render = { () => < MyHome fnDS = {dataSetter} />} />
      <Route exact path = "/result" render = {() => 
      < ResultPage b = {finalB} c ={finalC} a = {finalA} />}/>
      </BrowserRouter>
      </div>
  );
}

export default App;
