import React from 'react'
import {Link} from 'react-router-dom'
import ListGroup from 'react-bootstrap/ListGroup'


const ArrayChallenge = (props) => {
  
  const {item} = props

  return(
    <ListGroup>
      <Link to={`/array/${item._id}`} type="button" className="btn btn-primary mb-3 text-left">
        <p>{item.challengeName}</p>
      </Link>
    </ListGroup>
  )
}

export default ArrayChallenge