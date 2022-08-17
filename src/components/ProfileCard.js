import React from 'react'

function ProfileCard({card}) {
  return (
    <div className="greencard">
      <h3>{card.fistname} {card.lastname}</h3>
      <p>{card.email}</p>
      <p>{card.phone}</p>
      </div>
  )
}

export default ProfileCard