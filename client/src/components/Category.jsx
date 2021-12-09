import { useParams, Link } from 'react-router-dom'


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
          <Link className="thumbName" to={`/character/${duel.id}`}>
            <div className="agent">
              <h4 className="thumbName">{duel.fields.agent}</h4>
              <img className="thumbnail" src={duel.fields.agentThumbnail} alt="agent"/>
            </div>
            </Link>
        ))
        }
    </div>
    
  )
}