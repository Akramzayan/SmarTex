
import './App.css';
import Home from './pages/home/Home';
import Users from './pages/users/Users';
import Products from './pages/products/Products';
import {
  createBrowserRouter,
  RouterProvider,
  Outlet

} from "react-router-dom";
import Navbar from './components/navbar/Navbar';
import Footer from './components/footer/Footer';
import Menu from './components/menu/Menu';
import "./styles/global.scss"
import User from './pages/user/User';
import Product from './pages/product/Product';
import Quality from './pages/quality/Quality';
import Rendement from './components/rendment/Rendement';
import Calendar from './components/calendar/Calendar';
import Avancment from './components/avancment/Avancment';




function App() {

  const Layout =() =>{
    return (
      <div className='main'>
        <Navbar/>
        <div className="container">
          <div className="menuContainer">
            <Menu/>
          </div>
          <div className="contentContainer">
            <Outlet/>
          </div>
        </div>
        <Footer/>
      </div>
    )

  }
  const router = createBrowserRouter([
    {
      path:'/',
      element:<Layout/>,
      children:[
        {
          path:'/',
          element:<Home/>
        },
        {
          path:"/users",
          element:<Users/>
        },
        {
          path:"/products",
          element:<Products/>
        },
        {
          path:"/users/:id",
          element:<User/>
        },
        {
          path:"/products/:id",
          element:<Product/>
        },
        {
          path:"/quality",
         element:<Quality/>
        },
        {
          path:"/rendment",
         element:<Rendement/>
        },
        {
          path:"/calendar",
         element:<Calendar/>
        },
        {
          path:"/Avancment",
         element:<Avancment/>
        },
      ]
    },
  ]);
  

  return (
   <RouterProvider router={router}/>
  );
}

export default App;
