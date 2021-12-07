import React from 'react'
import { Link } from 'react-router-dom'

export default function Home() {
  return (
    <div>
      <Link to='/categories/duelist'>Duelists</Link>
      <Link to='/categories/sentinel'>Sentinels</Link>
      <Link to='/categories/controller'>Controllers</Link>
      <Link to='/categories/initiator'>Initiators</Link>


    </div>
  )
}
