import React from 'react'
import { ButtonGroup, Button, Container, Row, Col } from 'reactstrap'
import EventInstanceItem from './EventInstanceItem'

const EventInstanceList = ({ instanceList }) => (
  <Container className="eventInstanceList">
    <Row>
      <Button color="link">Available</Button>
      <Button color="link">Matinee</Button>
      <Button color="link">Sundays</Button>
    </Row>

    <Row>
      <Button color="link">Show as calendar</Button>
    </Row>

    { instanceList.map(instance => (
      <EventInstanceItem
        key={instance.id}
        date={instance.date}
        isAvailable={instance.isAvailable}
      />
    ))}
  </Container>
)

export default EventInstanceList
