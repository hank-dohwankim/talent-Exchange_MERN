import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import Header from './components/Header';
import Footer from './components/Footer';
import HomeScreen from './screens/HomeScreen';
import PostScreen from './screens/PostScreen';
import DashboardScreen from './screens/DashboardScreen';

function App() {
  return (
    <Router>
      <Header />
      <main className="py-3">
        <Container>
          <Route path="/" component={HomeScreen} exact />
          <Route path="/post/:id" component={PostScreen} />
          <Route path="/dashboard/:id?" component={DashboardScreen} />
        </Container>
      </main>
      <Footer />
    </Router>
  );
}

export default App;
