// App.js
import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Hero from './components/Hero';

function App() {
  return (
    <Router>
      <Hero />
    </Router>
  );
}

export default App;
