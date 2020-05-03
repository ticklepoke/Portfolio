import React from 'react'

const Toggle = ({ theme, toggleTheme }: any) => {
  console.log(theme)
  return (
    <div className="custom-control custom-switch">
      <input
        type="checkbox"
        className="custom-control-input"
        id="customSwitch1"
        checked={theme !== 'light'}
        onClick={toggleTheme}
      />
      <label className="custom-control-label" htmlFor="customSwitch1">
        {theme === 'light' ? 'Turn off the lights!' : 'Turn on the lights!'}
      </label>
    </div>
  )
}

export default Toggle
