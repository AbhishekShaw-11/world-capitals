
import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import AppLayout from './component/Layout/AppLayout';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Country from './pages/Country';
import ErrorPage from './pages/ErrorPage';
import CountryDetails from './component/Layout/CountryDetails';

const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout/>,
    errorElement: <ErrorPage/>,
    children: [{
      path: "/",
      element: <Home/>,
    },
    {
      path: "about",
      element: <About/>,
    },
    {
      path: "country",
      element: <Country/>,
    },
    {
      path: "country/:id",
      element: <CountryDetails/>,
    },
    {
      path: "Contact",
      element: <Contact/>,
    },],
  }
  
])

function App() {
  return (
    <div >
    <RouterProvider router={router}></RouterProvider>
    
     
    </div>
  );
}

export default App;
