import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { Container, Row, Col } from 'reactstrap'
import Insert from './components/Insert'
import Home from './components/Home'
import Header from './components/Header'
import Footer from './components/Footer'
function App() {

    return (
        <main>
            <Header />
            <Container>
                <Row>
                    <Col>
                        <Router>
                            <Route path="/" exact component={Home}></Route>
                            <Route path="/add" exact component={Insert}></Route>
                        </Router>
                    </Col>
                </Row>
            </Container>
            <Footer />
        </main>
    )
}

export default App