import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './Home.jsx';
import NavBar from './Navbar.jsx';
import OddsCalculator from './OddsCalculator.jsx';

class App extends React.Component{
  constructor(props) {
    super(props);

  }

  render() {
    return (
      <>
        <NavBar/>
        <Routes>
          <Route path="/" element={<OddsCalculator />} />
          <Route path="/home" element={<Home />} />
          <Route path="/wagers"/>
          <Route path="/calculator" element={<OddsCalculator />} />
        </Routes>
      </>
    )
  }
}

export default App;