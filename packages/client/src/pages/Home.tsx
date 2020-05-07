import React, { Fragment } from 'react'
import HelmetWrapper from '../common/HelmetWrapper'
import './Home.css'
export default function Home () {
  const platform = window.navigator.platform
  const platforms = ['iPhone', 'iPad', 'MacIntel']
  return (
    <Fragment>
      <HelmetWrapper
        title="Home | Nigel Lee"
        description="Computer Science student from Singapore, actively looking for software internships. Renaissance Engineering Program Student."
      />
      <div
        className={
          (platforms.includes(platform) ? 'bg-apple' : 'bg-android') +
          ' bg-main'
        }
        data-aos="fade"
      >
        <div
          data-aos="fade"
          className="container min-vh-90 d-flex flex-column justify-content-center align-items-baseline text-white"
        >
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
      <div data-aos="fade" className="container d-flex align-items-center">
        <div className="py-5">
          <h2 className="pb-4">Education</h2>
          <p className="lead">
            I&lsquo;m a Raffles Institution alumni and current C.S.
            undergraduate at Nanyang Technological University. I&lsquo;m also a
            student with the university&lsquo;s Renaissance Engineering Program.
          </p>
          <p className="lead">
            I hope to graduate with a B.EngSc. (Computer Science with a Minor in
            Mathematics) and M.Sc. (Technology Management) by Winter 2022.
          </p>
        </div>
      </div>
    </Fragment>
  )
}
