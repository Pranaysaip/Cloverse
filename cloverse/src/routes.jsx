// import { createBrowserRouter, RouterProvider } from "react-router-dom";
// import Home from "./pages/Home";
// import Chat from "./pages/Chat";
// import NotFound from "./pages/NotFound";

// const router = createBrowserRouter([
//     { path: "/", element: <Home /> },
//     { path: "/chat", element: <Chat /> },
//     { path: "*", element: <NotFound /> }
// ]);

// export default function App() {
//     return <RouterProvider router={router} />;
// }

import { createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import Chat from "./pages/Chat";
import NotFound from "./pages/NotFound";
import Chats from "./Pages/chats";
import LandingPage from "./Pages/landingpage";
import AfterSignIn from "./Pages/AfterSignIn";
import Chats from "./Pages/Chats";
import Sidebar from "./Pages/Sidebar";
import SignIn from "./pages/SignIn"; // Import the new SignIn page

const router = createBrowserRouter([
    { path: "/", element: <LandingPage /> },
    { path: "/chats", element: <Chats /> },
    { path: "*", element: <NotFound /> }
    { path: "/signin", element: <SignIn /> }
    { path: "/dashboard", element: <AfterSignIn /> }
]);

export default router;
