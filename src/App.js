import React from 'react';
import { BrowserRouter as Router, Rout, Link } from 'react-router-dom';
import { Container, Navbar, Nav } from 'react-bootstrap/';
import './App.css';

import Footer from './components/Footer';

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      title: 'Hadla Bergman',
      headerLinks: [
        { title: 'Home', path: '/' },
        { title: 'About', path: '/about' },
        { title: 'Contact', path: '/contact' }
      ],
      home: {
        title: 'Keep coding',
        subtitle: 'My Projects 2020',
        text: 'Check out my projects below'
      },
      about: {
        text: 'About me'
      },
      contact: {
        text: 'Let\'s talk!'
      }
    }
  }

  render() {

    return (
      <Router>
        <Container className="p-0" fluid={true}>
          <Navbar className="border-bottom" bg="transparent" expand="lg">
            <Navbar.Brand>Hadla Bergman</Navbar.Brand>
            <Navbar.Toggle className="border-0" aria-controls="navbar-toggle" />
            <Navbar.Collapse id="navbar-toggle">
              <Nav className="ml-auto">
                <Link className="nav-link" to="/">Home</Link>
                <Link className="nav-link" to="/about">About</Link>
                <Link className="nav-link" to="/contact">Contact</Link>
              </Nav>
            </Navbar.Collapse>
          </Navbar>

          <Footer />

        </Container>
      </Router>
    );
  }

}

export default App;
