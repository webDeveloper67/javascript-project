import React, {useState} from 'react'
import {Link, withRouter} from 'react-router-dom'
import {Navbar, Nav, NavDropdown} from 'react-bootstrap'

const Menu = (props) => {
  const [menuItems, setMenuItems] = useState([
    {name: 'javascript basics', id: '001', route: '/js-basics'},
    {name: 'javascript arrays', id: '002', route: '/js-arrays'},
    {name: 'javascript dates', id: '003', route: '/js-dates'},
    {name: 'javascript objects', id: '004', route: '/js-objects'},
    {name: 'javascript Sets', id: '005', route: '/js-sets'}
  ])

  const renderMenuItems = () => {
    let result = menuItems.map(el => {
      return <NavDropdown.Item key={el.id} onClick={() => pushToRoute(el.route)}>{el.name}</NavDropdown.Item>
    })
    return result
  }

  const pushToRoute = route => {
    props.history.push(route)
}

  return(
    <Navbar bg="light" expand="md">
      <Link to='/'>
        <Navbar.Brand>JS-Challenges</Navbar.Brand>
      </Link>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link as={Link} to='/array-form'>Create Challenge</Nav.Link>
          <NavDropdown title="Challenges" id="basic-nav-dropdown">
            {renderMenuItems()}
          </NavDropdown>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  )
}

export default withRouter(Menu)

