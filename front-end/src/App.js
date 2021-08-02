import React from 'react'
import {BrowserRouter as Router, Route} from 'react-router-dom'
import Container from 'react-bootstrap/Container'
import ArrayChallenges from './components/ArrayChallenges'
import ObjectChallenges from './components/ObjectChallenges'
import ArrayChallengeItem from './components/ArrayChallengeItem'
import ArrayForm from './components/ArrayForm'
import Menu from './screens/Menu'

const App = () => {
  return (
    <Router>
      <Menu />
      <Container fluid>
        <Route path='/array-form' component={ArrayForm} />
        <Route path='/js-arrays' component={ArrayChallenges} />
        <Route path='/array/:id' component={ArrayChallengeItem} />
        <Route path='/objects' component={ObjectChallenges} />
      </Container>
    </Router>
  );
}

export default App;
