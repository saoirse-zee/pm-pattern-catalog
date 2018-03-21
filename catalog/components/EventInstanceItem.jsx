import React from 'react'
import { Button, Container, Row, Col } from 'reactstrap'

const EventInstanceItem = ({ date, isAvailable }) => (
  <Container className="eventInstanceItem">
    <Row>
      <Col xs="9">
        <p>{ date }</p>
      </Col>
      <Col xs="3">
        {
          isAvailable
          ? <Button color="primary">Buy</Button>
          : <p>Sold out</p>
        }
      </Col>
    </Row>
  </Container>
)

export default EventInstanceItem
