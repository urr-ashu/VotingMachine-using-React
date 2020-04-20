import React, {useState} from 'react';
import Navbar from "./Navbar";
import Bjp from "./Bjp";
import Aap from "./Aap";
import Congress from "./Congress";
import ResultButton from './ResultButton';
import ResultPage from "./ResultPage";

export default function MyHome(props){
     
const [congressCount, updateCongressCount] = useState(0);
const [aapCount, updateAppCount] = useState(0);
const [bjpCount, updateBjpCount] = useState(0);

return(     
<div>
<Navbar/>
<Bjp updateCount = {updateBjpCount}/>
<Aap updateCount = {updateAppCount}/>
<Congress updateCount = {updateCongressCount}/>
<ResultButton 
fnSetter = { props.fnDS }
bCount = {bjpCount}
cCount = {congressCount}
aCount = {aapCount}
resultPageComponent = {<ResultPage/>}
/>
</div>
);
}