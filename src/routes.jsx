import { createBrowserRouter } from "react-router-dom";
import RootLayout from "./layout/RootLayout";
import About from "./pages/About/About";
import Home from "./pages/Home/Home";


// const router = createBrowserRouter(
//   createRoutesFromElements(
//     <Route path='/' element={<RootLayout/> }>
//       <Route index element={<Home/>}/>
//       <Route path="about" element={<About/>}/>
//       <Route path="contact" element={<Contact/>}/>
    
//     </Route>
//   )
// )

const router = createBrowserRouter([
  {
    path:'/' ,
    element:<RootLayout/>,
    children:[
      { index: true, element:<Home /> },
      { path:'about', element:<About /> },
    ]
  }
]);


export default router
