import './App.css';
import { getAllAgents } from './services/index.js'
import { useEffect, useState } from 'react'
import { Routes, Route } from 'react-router-dom'




function App() {

  const [category, setCategory] = useState([])
  // const [toggle, setToggle] = useState(false)
  
  useEffect(() => {
    const grabAgents = async () => {
      const response = await getAllAgents()
      // console.log(response.data)
      setCategory(response)
      // console.log(response.data)
    }
    grabAgents()
  }, [])


  return (
    <div className="App">
      <h1>VALO-Rants</h1>
      


    </div>
  );
}

export default App;
