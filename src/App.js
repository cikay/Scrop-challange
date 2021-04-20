import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import './i18n'
import Home from './Home'
import { Row, Col } from 'react-bootstrap'
import { Suspense } from 'react'
import LeftSidebar from './LeftSidebar'
import RightSidebar from './RightSidebar'
import { UserProvider } from './contexts/UserContext'
function App() {
  return (
    <UserProvider>
      <Suspense fallback={null}>
        <Row>
          <Col xs={12} sm={2}>
            <LeftSidebar />
          </Col>
          <Col xs={12} sm={8}>
            <Router>
              <Switch>
                <Route exact path='/'>
                  <Home />
                </Route>
                <Route path='/login'></Route>
              </Switch>
            </Router>
          </Col>
          <Col xs={12} sm={2}>
            <RightSidebar />
          </Col>
        </Row>
      </Suspense>
    </UserProvider>
  )
}

export default App
