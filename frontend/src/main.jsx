import React from "react";
import ReactDOM from "react-dom/client";

import {
  createBrowserRouter,
  RouterProvider,
  Routes,
  Route,
} from "react-router-dom";

import App from "./App";
import Contact from "./pages/Contact";
import StreetArtById from "./components/StreetArtById";
import StreetArtList from "./components/StreetArtList";
import Home from "./pages/Home";
import StreetArtPost from "./components/StreetArtPost";
import EditStreetArtForm from "./components/EditStreetArtForm";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "accueil", element: <Home /> },
      { path: "streetart", element: <StreetArtList /> },
      { path: "streetart/:id", element: <StreetArtById /> },
      { path: "contact", element: <Contact /> },
      { path: "post", element: <StreetArtPost /> },
      { path: "streetart/:id/edit", element: <EditStreetArtForm /> },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <RouterProvider router={router}>
      <Routes>
        <Route path="/" element={<App />} />
      </Routes>
    </RouterProvider>
  </React.StrictMode>
);
