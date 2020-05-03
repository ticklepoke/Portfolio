import React from 'react'

const Toggle = ({ toggleTheme }: any) => {
  return (
    <div className="custom-control custom-switch">
      <input
        type="checkbox"
        className="custom-control-input"
        id="customSwitch1"
        checked={undefined}
        onClick={toggleTheme}
      />
      <label className="custom-control-label" htmlFor="customSwitch1">
        Turn off the lights!
      </label>
    </div>
  )
}

export default Toggle
