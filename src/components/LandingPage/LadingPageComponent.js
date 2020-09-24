import React, { Component } from "react";
import { init } from "ityped";
import "./LandingPageComponent.css";

export class LandingPageComponent extends Component {
  render() {
    return (
      <section className="site-title">
        <div
          className="site-background"
          data-aos={"fade-up"}
          data-aos-delay={"100"}
        >
          <h3>Tours & Travel</h3>
          <h1>Amazing Place on The Earth</h1>
          <button className="btn">Explore</button>
        </div>
      </section>
    );
  }
}
