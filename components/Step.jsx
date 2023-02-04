'use client'
import React from 'react'

const Step = ({ s }) => {

  const {
    id,
    img,
    title,
    btn,
    icon
  } = s;
console.log(s)
  return (
    <section>
      <div>
        <img src={img} alt="img" />
      </div>
      <div>
        <div>{title}</div>
        <div>
          <span>{btn}</span>
          <span>{icon}</span>
        </div>
      </div>
    </section>
  )
}

export default Step