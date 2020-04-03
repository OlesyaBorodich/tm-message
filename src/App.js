import React from 'react';
import Massages from "./components/Messages/Messages";
import './App.css';
import Qualities from "./components/Qualities/Qualities";
import Greeting from "./components/Greeting/Greeting";


const App = (props) => {

    return <div>
        <Massages/>
        <Qualities/>
        <Greeting/>
    </div>
}

export default App;
