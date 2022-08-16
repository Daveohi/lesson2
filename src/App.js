
import './App.css';
import ClassComponent from './Component/ClassComponent';
import FunctionalComponent from './Component/FunctionalComponent';
// import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
// import Home from './Component/Home';
// import About from './Component/About';
// import Contact from './Component/Contact';
// function App() {
//   return (
//     <Router>
//       <div className="App">
//       <ul>
//         <li>
//           <Link to="/Home">Home</Link>
//         </li>
//         <li>
//           <Link to="/about">About Us</Link>
//         </li>
//         <li>
//           <Link to="/contact">Contact Us</Link>
//         </li>
//       </ul>
//     </div>

//     <Routes>
//       <Route exact path='/home' element={< Home />}></Route>
//       <Route exact path='/about' element={< About />}></Route>
//       <Route exact path='/contact' element={< Contact />}></Route>
//     </Routes>
//     </Router>
    
//   );
// }

function App() {
  return (
    <div className="App">
      <FunctionalComponent />

      <ClassComponent />

    </div>
  );
}

export default App;
