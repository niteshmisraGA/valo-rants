import './App.css';
import { getAllAgents } from './services/index.js'
import { useEffect, useState } from 'react'
import { Link, Routes, Route } from 'react-router-dom'
import Category from './components/Category'
import Home from './components/Home'
import Nav from './components/Nav'
import Agent from './components/Agent';
import Form from './components/Form';
import Footer from './components/Footer';
// import Categorysen from './components/Categorysen';



function App() {

  const [category, setCategory] = useState([])
  const [agents, setAgents] = useState([])
  const [toggle, setToggle] = useState(false)
  
  useEffect(() => {
    const grabAgents = async () => {
      const response = await getAllAgents();
      setCategory(response)
      setAgents(response)
  
    }
    grabAgents()
  }, [toggle])



  return (
    <div>
    <div className="App page-layout">
      <header className="header">
        <h1>VALO-Rants</h1>
        <Nav />
      </header>
      
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
        <Route
          path='/character/:id'
          element={<Agent />}
        />
        <Route
          path='/new'
          element={<Form setToggle={setToggle} />}
        />
        {/* <Route
          path="/categories/:sentinel"
          element={<Categorysen category={category} />}
        /> */}
        </Routes>
      
      </div>
      <div>
        <footer className='footer'> <Footer /></footer>
      </div>
      </div>
  );
}

export default App;
