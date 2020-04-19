import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import ResultPage from './components/ResultPage';
import MyHome from "./components/MyHome";

function App() {
 
  return (
    <div>
    <BrowserRouter>
      <Route path ="/home" component = { MyHome } />
      <Route path = "/result" component = {ResultPage}/>
      </BrowserRouter>
      </div>
  );
}

export default App;
