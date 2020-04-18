import React from 'react';
import Navbar from "./components/Navbar";
import Bjp from "./components/Bjp";
import Aap from "./components/Aap";
import Congress from "./components/Congress";
import Result from './components/Result';

function App() {
  return (
    <div>
      <Navbar/>
      <Bjp/>
      <Aap/>
      <Congress/>
      <Result/>
    </div>
  );
}

export default App;
