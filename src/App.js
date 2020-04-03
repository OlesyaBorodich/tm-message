import React from 'react';
import Massages from "./components/Messages/Messages";
import './App.css';
import Qualities from "./components/Qualities/Qualities";
import Dz3 from "./components/Dz3";


const App = (props) => {
    let qualities = ['позитивная', 'прямолинейная', 'целеустремленная'];
    const newqualities = qualities.map((q, index)=> <Qualities  key={index} q={q}/>);
    return <div>
        <Massages/>
            {newqualities}
        <Dz3/>
    </div>
}

export default App;
