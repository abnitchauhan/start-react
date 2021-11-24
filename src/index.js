import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from './Home.js';
import Blog from './Blog.js';
import Contact from './Contact.js';

// import Garage from './Props.js'; 
// import Header from './Header.js';
// import Garage from './List.js';
// import Count from './Count.js';
// import Form from './Form.js' ;
// const myFirstElement = <h1>React Test From Index</h1>

export default function App()
{
    return(
    <Router>
        <div>
            <Link to="/">Home</Link>
        </div>
        <div>
            <Link to="/blog">Blog Article</Link>
        </div>
        <div>
            <Link to="/contact">Contact Us</Link>
        </div> 
        <hr/> 
        <Routes>
            {/* <Route  path ="/"><Home /></Route> */}
            <Route path="/" element={<Home/>} />
            {/* <Route  path ="/blog"><Blog /></Route> */}
            <Route path="/blog" element={<Blog/>} />
            {/* <Route  path ="/contact"><Contact /></Route> */}
            <Route path="/contact" element={<Contact/>} />
        </Routes> 
    </Router>
    );
}

ReactDOM.render(<App />, document.getElementById('root'));

