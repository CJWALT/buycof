
import { createBrowserRouter, RouterProvider} from "react-router-dom";
import Navbar from './components/Navbar/Navbar'
import Footer from './components/Footer/Footer'
import Home from './pages/Home/Home'
import Cafe from './pages/Cafe/Cafe'
import Cafes from './pages/Cafes/Cafes'
import './app.scss'


 const router = createBrowserRouter([
    {
    path:"/",
      element:<Home/>
    },
    { path:"/cafes",
      element:<Cafes/>
    },
    {
      path:"/cafe/:id",
      element:<Cafe/>
    }
    ]);






function App() {

  return (
    <div>
      <RouterProvider router = {router}/>
    </div>

  );
}

export default App;
