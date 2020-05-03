import React from 'react'
import './Loading.css'

export default function Loading () {
  return (
    <div className="position-fixed vw-100 vh-100" style={{ top: '40%' }}>
      <div className="loader"></div>
    </div>
  )
}
