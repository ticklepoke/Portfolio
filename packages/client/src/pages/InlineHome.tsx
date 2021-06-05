import React, { FunctionComponent } from 'react'
import Toggle, { ToggleThemeProps } from '../components/ToggleTheme'
import { InlineHomeData } from '../_data/InlineHome'

import './InlineHome.css'

interface InlineHomeProps extends ToggleThemeProps {}

const { titleBar, about } = InlineHomeData
function InlineHome ({ theme, toggleTheme }: InlineHomeProps) {
  return (
    <div className="m-3">
      <div className="d-md-flex d-sm-block justify-content-between">
        <div>
          <h1>
            {titleBar.name.en}
            &nbsp;&nbsp;
            {titleBar.name.cn}
          </h1>
          <h5>
            {titleBar.links.map(({ title, href, body }, idx) => (
              <>
                {title}: <a href={href}>{body}</a>
                {idx != titleBar.links.length - 1 && '\t|\t'}
              </>
            ))}
          </h5>
        </div>
        <Toggle theme={theme} toggleTheme={toggleTheme} />
      </div>
      <hr />
      {about.map(line => (
        <p dangerouslySetInnerHTML={{ __html: line }} />
      ))}
      <hr />
      <h3>Work Experience</h3>
    </div>
  )
}

export default InlineHome
