import React from 'react'
import Button from './Button'

const EventInstanceItem = ({ date, isAvailable }) => (
  <div className="eventInstanceItem">
    <p>{date}</p>
      {
        isAvailable
          ? <Button
              label="Buy"
              onClick={console.log('Handle the "Buy" click.')}
            />
          : <p>Sold out</p>
      }
  </div>
)

export default EventInstanceItem
