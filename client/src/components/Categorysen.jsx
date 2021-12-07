import React from 'react'
import { useParams } from 'react-router-dom'

export default function Categorysen({ category }) {
  
  const {sentinel} = useParams()

  const sentinels = category.filter(record => {
    return sentinel === record.fields.category
  })
  
  return (
    <div>
      {
        sentinels.map((sen) => (
          <div>
            <h1>{sen.fields.agent}</h1>
          </div>
        ))
        }
    </div>
  )
}
