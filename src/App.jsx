import { RouterProvider } from 'react-router-dom';
import './App.css';
import { createBrowserRouter } from "react-router-dom";
import Home from './components/Home/Home';
import Main from './components/layouts/Main/Main';
import AppliedJobs from './components/AppliedJobs/AppliedJobs';
import AboutUs from './components/AboutUS/AboutUs';
import ContactUs from './components/ContactUs/ContactUs';


function App() {


  const router = createBrowserRouter([
    {
        path:'/',
        element:<Main></Main>,
        children:[
            {
                path:'/',
                element:<Home></Home>
            },
            {
                path:'home',
                element:<Home></Home>
            },
            {
                path:'applied-jobs',
                element:<AppliedJobs></AppliedJobs>
            },
            {
              path:'about-us',
              element:<AboutUs></AboutUs>
            },
            {
              path:'contact-us',
              element:<ContactUs></ContactUs>
            }
        ]
    }
]); 

  

  return (
    <div>
          <RouterProvider router={router}/>
    </div>
  )
}

export default App
