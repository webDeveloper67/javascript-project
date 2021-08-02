import React, {useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import ArrayChallenge from './ArrayChallenge'
import {getAllArrayChallenges} from './../actions'
import ArrayChallengeItem from './ArrayChallengeItem'


const ArrayChallenges = () => {
  const {arrayItems} = useSelector(state => state.arrayChallenge)

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getAllArrayChallenges())
  }, [dispatch])

  const singleArrayChallenge = arrayItems.map(item => {
    return <ArrayChallenge key={item._id} item={item}>
        <ArrayChallengeItem />
      </ArrayChallenge>
  })

  return(
    <Container fluid>
      <Row>
        <Col xs lg={8}>
          <p className='mt-3 mb-3'>Array Challenges</p>
          {singleArrayChallenge}
        </Col>
      </Row>
    </Container>
  )
}

export default ArrayChallenges