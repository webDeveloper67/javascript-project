import React, {useEffect} from 'react'
import {getSingleArrayChallenge} from './../actions'
import {useDispatch, useSelector} from 'react-redux'
import SyntaxHighlighter from 'react-syntax-highlighter'
import { docco } from 'react-syntax-highlighter/dist/esm/styles/hljs'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'


const ArrayChallengeItem = (props) => {
  
  const dispatch = useDispatch()

  const {singleArrayChallenge} = useSelector(state => state.arrayChallenge)

  useEffect(() => {
    dispatch(getSingleArrayChallenge(props.match.params.id))
  }, [dispatch, props.match.params.id])

  const renderSulotion = singleArrayChallenge.code && singleArrayChallenge.code.map(el => {
    return <SyntaxHighlighter key={el._id} className='blur-img' language="javascript" style={docco}>
      {el.solution}
    </SyntaxHighlighter>
  })

  const backToArrayList = () => {
    props.history.push('/js-arrays')
  }

  return(
    <Container fluid>
      <Row className='pt-3 justify-content-end'>
        <Col xs lg={4}>
          <Button onClick={backToArrayList}>Back to array challenges</Button>
        </Col>
      </Row>
      <Row className='p-3'>
        <Col xs lg={8}>
          <p><span className='fw-bold'>Challenge:</span>{' '}<span>{singleArrayChallenge.challengeName}</span></p>
          <p><span className='fw-bold'>Category:</span>{' '}<span>{singleArrayChallenge.category}</span></p>
          <p><span className='fw-bold'>Description:</span>{' '}<span>{singleArrayChallenge.description}</span></p>
          <p><span className='fw-bold'>Difficulty:</span>{' '}<span>{singleArrayChallenge.difficulty}</span></p>
        </Col>
      </Row>

      <Row className='mx-auto justify-content-center'>
        <Col xs lg={6}>
          {renderSulotion}
        </Col>
      </Row>
    </Container>
  )
}

export default ArrayChallengeItem