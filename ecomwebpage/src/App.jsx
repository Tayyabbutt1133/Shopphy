import "./App.css";


import { createBrowserRouter, RouterProvider} from 'react-router-dom';
import ProductDetails from "./Pages/ProductDetails";
import Products from "./Pages/Products";
import About from "./components/About";
import Root from "./Pages/Root";
import Contact from "./components/Contact";
// import Navbar from "./components/Navbar";


const router = createBrowserRouter([
  {
    path: '/',
    element: <Root/>,
    children: [
      {
        index: true,
        element: <Products/>,
        loader: async () => {
          const res = await fetch('https://fakestoreapi.com/products')
          const data = await res.json()
          console.log(data);
          return data;
        }
      },
      {
        path: '/products/:id',
        element: <ProductDetails />,
        // fetch data using api and assigning it to productdetails components
        loader: async ({params}) => {
          const res = await fetch(`https://fakestoreapi.com/products/${params.id}`)
          const data = await res.json()
          console.log(data)
          return data;
        }
      },
      {
        path: '/about',
        element: <About/>
      },
      {
        path: '/contact',
        element: <Contact/>
      }
   ]
  },

  

])



function App() {
  return (
    <>
     <RouterProvider router={router} />
    </>
  );
}

export default App;
