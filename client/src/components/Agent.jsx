import React from 'react'
import { Link, useParams } from 'react-router-dom'



export default function Agent({agents}) {

  const {agent} = useParams()

  const agentsArr = agents.filter(record => {
    return agent === record.fields.agent
  })

  return (
    <div>
      {agentsArr.map(agent => (

<Link to={`/categories/duelist/${agent}`}><img src= {agents.fields.agentPicture} alt="agent"/></Link>
      ))}
      <h1>Hello PAIN</h1>
    </div>
  )
}
