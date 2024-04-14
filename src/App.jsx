import Home from './pages/Home/Home.jsx';
import Projects from './pages/Projects/Projects.jsx';
import GoogleAnalytics from './components/GoogleAnalytics/GoogleAnalytics.jsx'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import React from 'react';
import ScrollToTop from './components/ScrollToTop/ScrollToTop.jsx';


function App() {


  return (
    <Router>
      <ScrollToTop>
        <Routes>
            <Route path="/" element={<GoogleAnalytics />}>
              <Route index element={<Home />} />
              <Route path="/projects" element={<Projects />} />
            </Route>
        </Routes>
      </ScrollToTop>
    </Router>
  )
}

export default App
