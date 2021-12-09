import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { getAgent, getAbilities } from "../services";

export default function Agent() {
  const { id } = useParams();
  const [agent, setAgent] = useState(null)
  const [ability, setAbility] = useState('')

  useEffect(() => {
    const grabAgent = async () => {
      const response = await getAgent(id);
      setAgent(response)
    }
    grabAgent()
  }, [id])

  useEffect(() => {
    const grabAbility = async () => {
      const response = await getAbilities(id);
      setAbility(response)
    }
    grabAbility()
    
  }, [id])

  if (!agent) return <h1>Loading...</h1>
  
  if (!ability)
    return (
      <div className="agent-details-page">
        <h1>{agent.fields.agent}</h1>
        <h1>{agent.fields.description}</h1>
      </div>
  )

  // console.log(ability)
    let abilityArr = ability.split('-')
    // Initially, the first item in the above array is an empty string. SO not cool.
    abilityArr.shift()
    console.log(abilityArr)

  return (
    <div className="agent-details-page">
      <img className="details-picture pic" src={agent.fields.agentPicture} alt="agent" />
      <div className="details-page deets">
        <h3>Description</h3>
        <p>{agent.fields.description}</p>
        <h3>Abilities</h3>
        <ul>
          {abilityArr.map((ability) => (
            <li>{ability}</li>
        ))}
        </ul>
        {/* <p>{agent.fields.agentAbilities}</p> */}
      </div>    
    </div>
  );
}
