import { createBrowserRouter } from "react-router-dom";



export const route = createBrowserRouter([
 
 {
  path:"/", 
  element:<Home/>
},
 {
  path:"/otherpage", 
  element:<SignUp/>
},

 
]);
