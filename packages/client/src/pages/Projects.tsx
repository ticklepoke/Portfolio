import React, { Fragment } from 'react'
import HelmetWrapper from '../common/HelmetWrapper'
import { projects, Url } from '../_data/Projects'

const renderLinks = (links: Url[]) => {
  const linkElement = links.map(link => {
    return (
      <a
        href={link.url}
        target="_blank"
        rel="noopener noreferrer"
        className="card-text mx-1"
      >
        {link.domain}
      </a>
    )
  })
  return linkElement
}

const renderProjectCards = () => {
  const cards = projects.map(project => {
    return (
      <div key={project.title} className="mb-3 col-md-4">
        <div className="card mx-2" style={{ minHeight: '100%' }}>
          <div className="card-body">
            <h4 className="card-title">{project.title}</h4>
            <p className="card-text">{project.details}</p>
            {renderLinks(project.urls)}
          </div>
        </div>
      </div>
    )
  })
  return cards
}

export default function Projects () {
  return (
    <Fragment>
      <HelmetWrapper
        title="Projects | Nigel Lee"
        description="React, Angular, JavaScript, Docker, Kubernetes, Google Cloud platform developer"
      />
      <div data-aos="fade" className="container">
        <h1 className="my-5">Projects</h1>
        <h3 className="my-2">A selection of my projects to look at.</h3>
        <div className="row no-gutters my-3">{renderProjectCards()}</div>
      </div>
    </Fragment>
  )
}
