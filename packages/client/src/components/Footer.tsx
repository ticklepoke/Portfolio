import React from 'react'

export default function Footer () {
  return (
    <div style={{ minHeight: '70px' }} className="container-fluid">
      <div className="d-flex justify-content-center align-items-center pb-3 pt-4">
        <span>Stay Connected</span>
      </div>
      <div className="d-flex justify-content-around p-3">
        <a href="/">Email</a>
        <a href="/">Github</a>
        <a href="/">Medium</a>
        <a href="/">LinkedIn</a>
      </div>
    </div>
  )
}
