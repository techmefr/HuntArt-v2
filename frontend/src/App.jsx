import { Outlet } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import "./components/font.css";
import Logo from "./components/Logo";
import "./components/logo.css";
import NavbarMobile from "./components/NavBarMobile";
import NavbarDesktop from "./components/navBarDesktop";
import "./App.css";

function App() {
  return (
    <>
      <div className="app-container">
        <header>
          <Logo />
          <NavbarDesktop />
        </header>
        <main>
          <Outlet />
        </main>
        <footer>
          <NavbarMobile />
        </footer>
      </div>
      <ToastContainer />
    </>
  );
}

export default App;
