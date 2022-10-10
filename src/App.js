import './App.css';
import Home from './Home';
import { useEffect, useState } from 'react';
import UseMemo from './UseMemo';
import UseReducer from './UseReducer';

function App() {

  const[player,setplayer]= useState('sachin')
  const[numbers,setnumbers]= useState([1,3,5,7,9])
  const[language,setlanguage]= useState('java')


  useEffect(()=>{

    setlanguage('JavaScript')

  },[])

  function changeplayer(){

    setplayer('Dhoni')
    setnumbers([2,4,6,8,10])

  }

  return (
    <div className="App">
      <h1>React Hooks</h1>
      <h1>The decleared player is {player}</h1>
      <h1>the decleared numbers is{numbers}</h1>
      <button onClick={changeplayer}>Change Player</button>
      
      <h1>the decleared language is {language}</h1>

      <Home/>
      <UseMemo/>
      <UseReducer/>
    </div>
  );
}

export default App;
