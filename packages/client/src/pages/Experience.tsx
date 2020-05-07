import React, { Fragment } from 'react'
import HelmetWrapper from '../common/HelmetWrapper'
import { experiences } from '../_data/Experience'
const renderCards = () => {
  const cards = experiences.map(experience => {
    return (
      <div key={experience.title} className="mb-3 col-md-4">
        <div className="card mx-2" style={{ minHeight: '100%' }}>
          <div className="card-header">{experience.date}</div>
          <div className="card-body">
            <h4 className="card-title">{experience.title}</h4>
            <p className="card-text">{experience.description}</p>
          </div>
        </div>
      </div>
    )
  })
  return cards
}
export default function Experience () {
  return (
    <Fragment>
      <HelmetWrapper
        title="Experiences | Nigel Lee"
        description="SG Innovate Summation Program Apprentice, DBS Unicorn+ Tech Intern, Renaissance Engineering Program Student"
      />
      <div className="container my-5" data-aos="fade">
        <h1>Experience</h1>
        <h3 className="my-5">
          I&lsquo;ve worked at a few places and am eager for more opportunities.
        </h3>
        <div className="row no-gutters">{renderCards()}</div>
      </div>
    </Fragment>
  )
}
