// import './App.css';
// // import RegisterPage from './components/RegisterPage';   // register page working 
// // import Loginpage from './components/LoginPage';
// import Navbar from './components/Navbar';
// // import SideBar from './components/Sidebar';
// import ReactDOM from "react-dom/client";
// import { BrowserRouter, Routes, Route } from "react-router-dom";



// function App() {
//   return (
//     <>
//     <div className="App">
//       <Navbar />
//       {/* <RegisterPage/>  */}
//       {/* <Loginpage /> */}
//     </div>
//       {/* <div>
//       <SideBar />

//       </div> */}
//       </>
//   );
// }

// export default App;


import './App.css';
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import RegisterPage from './components/RegisterPage';   // register page working 
import Loginpage from './components/LoginPage';
// import HomePage from './components/Homepage';
import HomePage from './components/Homepage';
// import SideBar from './components/Sidebar';




function App() {
  return (
    
    <BrowserRouter>
    <Routes>
        <Route path="/" element={<HomePage />}>
          <Route path="/login" element={<Loginpage />} />
          <Route path="/register" element={<RegisterPage />} />
          {/* <Route path="/sidebar" element={<SideBar />} /> */}
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;