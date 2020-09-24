import React from "react";
import "./App.css";
import { LandingPageComponent } from "./components/LandingPage/LadingPageComponent";
import { NavbarComponent } from "./components/Navbar/NavbarComponent";

function App() {
  return (
    <div className="App">
      <NavbarComponent />
      <main>
        <LandingPageComponent />
      </main>
    </div>
  );
}

export default App;
