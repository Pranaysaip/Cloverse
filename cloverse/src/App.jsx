// import './App.css'
// import { Button } from './components/ui/button'
// import Navbar from "./components/ui/Navbar";
// import userRoutes from "./routes/userRoutes.js"; // Correct path

// function App() {

//   return (
//     <>
//       <h1 className='text-2xl text-center'>Hello World</h1>
//       <Button>Click me</Button>
//     </>
//   )
// }

// export default App

// import './App.css';
// import { Button } from './components/ui/button';
// import Navbar from './components/ui/Navbar';
// import { RouterProvider } from 'react-router-dom';
// import router from './routes'; // Ensure this path is correct
// import UserProfile from "./components/UserProfile.jsx"; // ✅ Ensure correct path
// import { Auth0Provider } from "@auth0/auth0-react"; // ✅ Ensure Correct Import

// console.log("App is rendering..."); // ✅ Check if App.jsx is being executed

// export default function App() {
//   return (
//       <Auth0Provider
//           domain={import.meta.env.VITE_AUTH0_DOMAIN}
//           clientId={import.meta.env.VITE_AUTH0_CLIENT_ID}
//           authorizationParams={{ redirect_uri: window.location.origin }}
//       >
//           <h1>Hello, Cloverse!</h1> {/* ✅ Add this to check if rendering works */}
//           <UserProfile /> {/* ✅ Correct Usage */}
//       </Auth0Provider>
//   );
// }










// import './App.css';
// import { RouterProvider, BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import { Auth0Provider } from "@auth0/auth0-react";
// import Navbar from './components/ui/Navbar';
// import Sidebar from './pages/Sidebar'; 
// import LandingPage from './pages/LandingPage';
// import AfterSignIn from './pages/AfterSignIn';
// import Chats from './pages/Chats';
// import UserProfile from "./components/UserProfile.jsx";
// import router from './routes'; // Ensure this path is correct

// console.log("App is rendering...");

// export default function App() {
//   return (
//     <Auth0Provider
//       domain={import.meta.env.VITE_AUTH0_DOMAIN}
//       clientId={import.meta.env.VITE_AUTH0_CLIENT_ID}
//       authorizationParams={{ redirect_uri: window.location.origin }}
//     >
//       <Router>
//         <div className="App">
//           <Sidebar /> {/* Sidebar is now included */}
//           <Routes>
//             <Route path="/" element={<LandingPage />} />
//             <Route path="/signin" element={<AfterSignIn />} />
//             <Route path="/chats" element={<Chats />} />
//           </Routes>
//         </div>
//       </Router>
//     </Auth0Provider>
//   );
// }


import React from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import { Auth0Provider } from "@auth0/auth0-react"; // Import Auth0
import LandingPage from "./Pages/landingpage";
import AfterSignIn from "./Pages/AfterSignIn";
import Chats from "./Pages/Chats";
import Sidebar from "./Pages/Sidebar";
import SignIn from "./pages/SignIn"; // Import the new SignIn page

function Layout() {
  const location = useLocation();
  const sidebarRoutes = ["/chats"];

  return (
    <div className="App">
      {sidebarRoutes.includes(location.pathname) && <Sidebar />}
      <Routes>
      <Route path="/" element={<LandingPage />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/chats" element={<Chats />} />
        <Route path="/dashboard" element={<AfterSignIn />} />

      </Routes>
    </div>
  );
}

function App() {
  return (
    <Auth0Provider
      domain={import.meta.env.VITE_AUTH0_DOMAIN}
      clientId={import.meta.env.VITE_AUTH0_CLIENT_ID}
      authorizationParams={{ redirect_uri: window.location.origin }}
    >
      <Router>
        <Layout />
      </Router>
    </Auth0Provider>
  );
}

  
export default App;
