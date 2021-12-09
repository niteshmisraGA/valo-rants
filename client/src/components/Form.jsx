import React from 'react'
import {useState, useEffect} from 'react'
import { postAgent } from '../services'
import { useNavigate } from 'react-router-dom'

export default function Form(props) {
  
  const [category, setCategory] = useState('')
  const [agent, setAgent] = useState('')
  // const [agentAbilities, setAgentAbilities] = useState('')
  const [description, setDescription] = useState('')
  const [agentPicture, setAgentPicture] = useState()
  const navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newAgent = {
      category,
      agent,
      description,
      agentPicture,
    }
    const response = await postAgent(newAgent)
    props.setToggle(prevToggle => !prevToggle)
    
    if (response) {
      navigate('/')
    }
  }
  
  return (
    <div className="App">
      <h1>Build an Agent!</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <h3>duelist | sentinel | controller | initiator</h3>
          <input
            className="input"
            type='text'
            value={category}
            placeholder='Choose one category.'
            onChange={(e)=>setCategory(e.target.value)}
          />
          <h3>Name your agent.</h3>
          <input
            className="input"
            type='text'
            value={agent}
            placeholder='Use that imagination.'
            onChange={(e)=>setAgent(e.target.value)}
          />
          <h3>Describe your agent.</h3>
          <input
            className="input"
            type='text'
            value={description}
            placeholder="What do they do?"
            onChange={(e)=>setDescription(e.target.value)}
          />
          <h3>Show us what they look like!</h3>
          <input
            className="input"
            type='text'
            value={agentPicture}
            placeholder='Post an image address.'
            onChange={(e)=>setAgentPicture(e.target.value)}
          />
          <button>Send it.</button>
        </div>
      </form>
    </div>
  )
}
