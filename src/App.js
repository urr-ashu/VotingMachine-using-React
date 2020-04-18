import React, {useState} from 'react';
import Navbar from "./components/Navbar";
import Bjp from "./components/Bjp";
import Aap from "./components/Aap";
import Congress from "./components/Congress";
import Result from './components/Result';


function App() {
  const [congressCount, updateCongressCount] = useState(0);
  const [aapCount, updateAppCount] = useState(0);
  const [bjpCount, updateBjpCount] = useState(0);


  return (
    <div>
      <Navbar/>
      <Bjp updateCount = {updateBjpCount}/>
      <Aap updateCount = {updateAppCount}/>
      <Congress updateCount = {updateCongressCount}/>
      <Result 
      bCount = {bjpCount}
      cCount = {congressCount}
      aCount = {aapCount}
      />

    </div>
  );
}

export default App;
