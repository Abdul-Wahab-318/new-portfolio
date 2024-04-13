import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './pages/Home/Home.jsx';
import Projects from './pages/Projects/Projects.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home/>,
  },
  {
    path: "/projects",
    element: <Projects/>
  }
]);


function App() {

  return (
    <RouterProvider router={router} />
  )
}

export default App
