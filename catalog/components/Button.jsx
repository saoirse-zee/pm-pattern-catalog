import React from 'react'

const Button = ({ label, onClick }) => (
  <div
    className="slds-button_brand patman-button_brand"
    onClick={onClick}
  >
    { label }
  </div>
)

export default Button
