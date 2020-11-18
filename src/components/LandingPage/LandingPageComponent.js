import React, { Component } from "react";
import "./LandingPageComponent.css";
import AOS from "aos";
import "aos/dist/aos.css";

export class LandingPageComponent extends Component {
  componentDidMount() {
    AOS.init({
      duration: 1000,
    });
  }

  render() {
    return (
      <section className="site-title">
        <div
          className="site-background"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          <h3>Tours & Travel</h3>
          <h1>Amazing Place on The Earth</h1>
          <button className="btn">Explore</button>
        </div>
      </section>
    );
  }
}
