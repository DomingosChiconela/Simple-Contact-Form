import { createBrowserRouter } from "react-router-dom";
import { ContactForm } from "./components/pages/ContactForm";
import { About } from "./components/pages/About";



export const route = createBrowserRouter([
 
 {
  path:"/", 
  element:<ContactForm/>
},
{
  path:"/about", 
  element:< About/>
}
 

 
]);
