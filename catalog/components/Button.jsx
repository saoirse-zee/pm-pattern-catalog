import React from 'react'

const Button = ({ label, onClick }) => (
  <button
    className="patman-button_brand"
    onClick={onClick}
  >
    { label }
  </button>
)

export default Button
