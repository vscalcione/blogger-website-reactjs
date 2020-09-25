import React from "react";
import "./App.css";
import { LandingPageComponent } from "./components/LandingPage/LadingPageComponent";
import { NavbarComponent } from "./components/Navbar/NavbarComponent";
import { CarouselPostsComponent } from "./components/CarouselPostsComponent/CarouselPostsComponent";

function App() {
  return (
    <div className="App">
      <NavbarComponent />
      <main>
        <LandingPageComponent />
        <CarouselPostsComponent />
      </main>
    </div>
  );
}

export default App;
