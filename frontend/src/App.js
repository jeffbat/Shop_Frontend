import { Container } from 'react-bootstrap'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import logo from './logo.svg';
import Header from './components/Header';
import Footer from './components/Footer';


import HomeScreen from './screens/HomeScreen'
import ProductScreen from './screens/ProductScreen'




function App() {
  return (
    <Router>
        <Header />
        <main>
            <Container>
                <Route path='/' component={HomeScreen} exact />
            </Container>
        </main>
        <Footer />
    </Router>
  );
}

export default App;
