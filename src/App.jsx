import Home from './pages/Home/Home.jsx';
import Projects from './pages/Projects/Projects.jsx';
import GoogleAnalytics from './components/GoogleAnalytics/GoogleAnalytics.jsx'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<GoogleAnalytics />}>
          <Route index element={<Home />} />
          <Route path="/projects" element={<Projects />} />
        </Route>
      </Routes>
    </Router>
  )
}

export default App
