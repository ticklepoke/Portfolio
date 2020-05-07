import React from 'react'

export default function Footer () {
  return (
    <div style={{ minHeight: '70px' }} className="container-fluid">
      <div className="d-flex justify-content-center align-items-center pb-3 pt-4">
        <span>Stay Connected</span>
      </div>
      <div className="d-flex justify-content-around p-3">
        <a href="mailto:lee.nigel@hotmail.com">Email</a>
        <a href="https://github.com/ticklepoke">Github</a>
        <a href="https://medium.com/@nigggel.lee">Medium</a>
        <a href="https://www.linkedin.com/in/nigel-lee-singapore/">LinkedIn</a>
      </div>
    </div>
  )
}
