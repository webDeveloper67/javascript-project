import React, { useState } from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { Form, Field } from 'react-final-form'
import {ButtonGroup, Button} from 'react-bootstrap'
import { addArrayChallenge } from '../actions'
import {useDispatch} from 'react-redux'



const ArrayForm = (props) => {

  const dispatch = useDispatch()

  const [categories, setCategories] = useState([
    {categoryName: 'javascript basics', id: 'BASIC'},
    {categoryName: 'javascript arrays', id: 'ARRAY'},
    {categoryName: 'javascript dates', id: 'DATE'},
    {categoryName: 'javascript objects', id: 'OBJECT'},
    {categoryName: 'javascript Sets', id: 'SETS'},
  ])

  const renderCategories = categories.map(category => (
    <option key={category.id}>{category.categoryName}</option>
  ))

  const [challengeLevel, setChallengeLevel] = useState([
    {level: 'easy', id: 'EASY'},
    {level: 'medium', id: 'MEDIUM'},
    {level: 'difficult', id: 'DIFFICULT'},
  ])

  const renderChallengeLevel = challengeLevel.map(ChLevel => (
    <option key={ChLevel.id}>{ChLevel.level}</option>
  ))


const onSubmit = values => {
  dispatch(addArrayChallenge(values))
  props.history.push('/js-arrays')
}

  return(
    <Container fluid>
      <Row className='justify-content-center mt-5'>
        <Col xs lg={8}>
          <Form
            onSubmit={onSubmit}
            render={({handleSubmit, form, submitting, pristine, values}) => (
              <form onSubmit={handleSubmit}>
                <div>
                  <label className="form-label fw-bold">Challenge Name</label>
                  <Field
                    className="form-control"
                    name='challengeName'
                    component='input'
                    type='text'
                    placeholder='Enter challenge name'
                  />
                </div>

                <div className='mt-3'>
                  <label className="form-label fw-bold">Challenge Category</label>
                  <Field name='category' component='select' className="form-select">
                    {renderCategories}
                  </Field>
                </div>

                <div className='mt-3'>
                  <label className="form-label fw-bold">Challenge Description</label>
                  <Field name="description" component="textarea" placeholder="description" className="form-control" />
                </div>

                <div className='mt-3'>
                  <label className="form-label fw-bold">Challenge Difficulty</label>
                  <Field name='difficulty' component='select' className="form-select">
                    {renderChallengeLevel}
                  </Field>
                </div>

                <div>
                  <ButtonGroup className='mt-3'>
                    <Button variant='secondary' type='submit' disabled={submitting || pristine}>
                      Submit
                    </Button>

                    <Button variant='primary' type='button' disabled={submitting || pristine} onClick=  {form.reset}>
                      Reset
                    </Button>
                  </ButtonGroup>
                </div>
              </form>
            )}
          />
        </Col>
      </Row>
    </Container>
  )
}

export default ArrayForm