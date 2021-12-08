import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { getAgent } from "../services";

export default function Agent() {
  const { id } = useParams();

  const [agent, setAgent] = useState(null)

  useEffect(() => {
    const grabAgent = async () => {
      const response = await getAgent(id);
      setAgent(response)
    }
    grabAgent()
  }, [id])

if(!agent) return <h1>Loading...</h1>

  return (
    <div className="agent-details-page">
      <img className="details-picture" src={agent.fields.agentPicture} alt="agent" />
      <h1 className="fuck">{agent.fields.description}</h1>
    </div>
  );
}
