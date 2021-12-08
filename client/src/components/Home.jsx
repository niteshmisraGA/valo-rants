import React from 'react'
import { Link } from 'react-router-dom'

export default function Home() {
  return (
    <div className="category-container">
      <Link to='/categories/duelist'>{<div className="duel cat-div">Duelists</div>}</Link>
      <Link to='/categories/sentinel'>{<div className="sen cat-div">Sentinels</div>}</Link>
      <Link to='/categories/controller'>{<div className="con cat-div">Controllers</div>}</Link>
      <Link to='/categories/initiator'>{<div className="init cat-div">Initiators</div>}</Link>


    </div>
  )
}
