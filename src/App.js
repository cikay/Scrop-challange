import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import './i18n'
import Home from './pages/Home'
import { Row, Col } from 'react-bootstrap'
import { Suspense } from 'react'
import LeftSidebar from './components/LeftSidebar'
import RightSidebar from './components/RightSidebar'
import { UserProvider } from './contexts/UserContext'
import ContactUs from './pages/ContactUs'
import Footer from './components/Footer'
function App() {
  return (
    <UserProvider>
      <Suspense fallback={null}>
        <Router>
          <Row style={{ height: '80vh' }}>
            <Col xs={12} sm={2}>
              <LeftSidebar />
            </Col>
            <Col xs={12} sm={8}>
              <Switch>
                <Route exact path='/'>
                  <Home />
                </Route>
                <Route path='/contactus'>
                  <ContactUs />
                </Route>
              </Switch>
            </Col>
            <Col xs={12} sm={2}>
              <RightSidebar />
            </Col>
          </Row>
          <Footer />
        </Router>
      </Suspense>
    </UserProvider>
  )
}

export default App
