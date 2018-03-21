import React from 'react'
import { Button as RS_Button } from 'reactstrap'

const Button = ({ label, onClick }) => (
  <RS_Button
    color="primary"
  >
    { label }
  </RS_Button>
)

export default Button
