import  React from 'react'
import {Link} from 'react-router-dom'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'

const Home = () => {
  return (
    <Container fluid>
      <Row className="justify-content-center text-center mt-5">
        <Col xs lg={8}>
          <h1>JavaScript Challenges {`👋`}</h1>
        </Col>
      </Row>
      <Row className='justify-content-center text-center mt-5'>
        <Col xs lg={8}>
          <Link to='/arrays'>
            <Button className='mr-3' variant='primary'>Array Challenges</Button>
          </Link>
          <Link to='/objects'>
            <Button variant='secondary'>Object Challenges</Button>
          </Link>
          <Link to='/array-form'>
            <Button className='ml-3' variant='primary'>Array Form</Button>
          </Link>
        </Col>
      </Row>
    </Container>
  )
}

export default Home