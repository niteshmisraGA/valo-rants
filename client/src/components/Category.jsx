import { useParams } from 'react-router-dom'


export default function Category({category}) {

  const {duelist} = useParams()

  const duelists = category.filter(record => {
    return duelist === record.fields.category
  })


  // if (!record) {
  //   return (<h3>Loading...</h3>)
  // }

  
  return (
    <div className="agent-container">
      {
        duelists.map((duel) => (
          <div className="agent">
            <img src={duel.fields.agentPicture} alt="agent"/>
            <h1>{duel.fields.agent}</h1>
          </div>
        ))
        }
    </div>
    
  )
}