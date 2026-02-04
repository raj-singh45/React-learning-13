import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route, Link } from "react-router";
import Home from "./Home";
import Contact from "./Contact";
import Detail from "./Detail";
import Hii from "./Hii";
import Hello from "./Hello";
import Zero from "./Zero";
import Github from "./Github";
import Power from "./Power";



function App() {
   return (
      <>
         <BrowserRouter>
            <nav>
               <Link to="/">Home</Link>
               <Link to="/Contact">Contact</Link>
               <Link to="/Detail">Detail</Link>
            </nav>

            <Routes>
               <Route path="/" element={<Home></Home>}></Route>
               <Route path="/Contact" element={<Contact></Contact>} ></Route>
               <Route path="/Detail" element={<Detail></Detail>}>
                  <Route index element={<Zero></Zero>}></Route>
                  <Route path="Hello" element={<Hello></Hello>}></Route>
                  <Route path="Hii" element={<Hii></Hii>}></Route>
               </Route>
               <Route path = "/Github/:name" element = {<Github></Github>}></Route>
                <Route path  = "/Power" element = {<Power></Power>}>
                </Route>
               
            </Routes>
            <Link to  = "/Power">
            <button>View</button></Link>
         </BrowserRouter>
      </>
   )
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />);