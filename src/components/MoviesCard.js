import React from 'react'
import { Button, Card } from 'react-bootstrap'

function MoviesCard({Movie}) {
  return (
    <div className='card'>
        <Card >
  <Card.Img variant="top" src={Movie.posterUrl} />
  <Card.Body>
    <div className='title_play'>
    <Card.Title>{Movie.title}</Card.Title>
    <Card.Text>
     
    </Card.Text>
    <Button variant="primary">Play</Button>
    </div>
  </Card.Body>
</Card>
    </div>
  )
}

export default MoviesCard;

