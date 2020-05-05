import React, { Fragment } from 'react'
import HelmetWrapper from '../common/HelmetWrapper'
import './Home.css'
export default function Home () {
  return (
    <Fragment>
      <HelmetWrapper
        title="Home | Nigel Lee"
        description="Computer Science student from Singapore, actively looking for software internships. Renaissance Engineering Program Student."
      />
      <div className="bg-main">
        <div className="container min-vh-90 d-flex flex-column justify-content-center align-items-baseline text-white">
          <div className="w-100">
            <img
              src={require('../assets/profile.jpg')}
              alt="Profile"
              className="profile-img my-5"
            />
          </div>
          <h1 className="text-white">Nigel Lee</h1>
          <h3 className="mt-3 text-white text-none">
            Self-learning software development and web technologies.
          </h3>
          <h3 className="my-3 text-white text-none">
            Renaissance Engineering Program Undergraduate.
          </h3>
        </div>
      </div>
    </Fragment>
  )
}
