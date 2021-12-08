import './App.css';
import { getAllAgents } from './services/index.js'
import { useEffect, useState } from 'react'
import { Link, Routes, Route } from 'react-router-dom'
import Category from './components/Category'
import Home from './components/Home'
import Nav from './components/Nav'
import Agent from './components/Agent';
// import Categorysen from './components/Categorysen';



function App() {

  const [category, setCategory] = useState([])
  const [agents, setAgents] = useState([])
  // const [toggle, setToggle] = useState(false)
  
  useEffect(() => {
    const grabAgents = async () => {
      const response = await getAllAgents();
      setCategory(response)
      setAgents(response)
  
    }
    grabAgents()
  }, [])



  return (
    <div className="App">
      <h1>VALO-Rants</h1>
      <Nav />
      <Routes>
        <Route
          path='/'
          element={<Home />}
          
        />
        <Route
          path="/categories/:duelist"
          element={<Category category={category} agents={agents}/>}
        />
        <Route
          path='/categories/duelist/:agent'
          element={<Agent agents={agents} />}
        />
        {/* <Route
          path="/categories/:sentinel"
          element={<Categorysen category={category} />}
        /> */}
      </Routes>
      


    </div>
  );
}

export default App;
