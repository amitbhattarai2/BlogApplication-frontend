import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { Container } from 'react-bootstrap'
import HomeScreen from './screens/HomeScreen'
import PlacementCreateScreen from './screens/PlacementCreateScreen'
import PlacementEditScreen from './screens/PlacementEditScreen'

const App = () => {
  return (
    <Router>
      <main className='py-3'>
        <Container>
          <Route
            path='/placements/:id/:packageName/:position/edit'
            component={PlacementEditScreen}
          />
          <Route path='/posts/:id/create' component={PlacementCreateScreen} />
          <Route path='/' component={HomeScreen} exact />
        </Container>
      </main>
    </Router>
  )
}

export default App
