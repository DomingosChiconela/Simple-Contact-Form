import { createBrowserRouter } from "react-router-dom";
import { ContactForm } from "./components/pages/ContactForm";



export const route = createBrowserRouter([
 
 {
  path:"/", 
  element:<ContactForm/>
},
 {
  path:"/otherpage", 
  element:<SignUp/>
},

 
]);
