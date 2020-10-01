import React, { Component } from "react";
import "./CarouselPostsComponent.css";
import AOS from "aos";
import "aos/dist/aos.css";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.min.css";
import "owl.carousel/dist/assets/owl.theme.default.min.css";
import "font-awesome/css/font-awesome.min.css";

import CarouselPost1 from "../../assets/images/Blog-post/post-3.jpg";
import CarouselPost2 from "../../assets/images/Blog-post/post-2.jpg";
import CarouselPost3 from "../../assets/images/Blog-post/post-1.jpg";

export class CarouselPostsComponent extends Component {
  componentDidMount() {
    AOS.init();
  }

  render() {
    return (
      <section>
        <div className="blog">
          <div className="container">
            <OwlCarousel
              className={"owl-carousel owl-theme blog-post owl-theme"}
              loop
              margin={8}
              autoplay
              autoplayTimeout={4500}
            >
              <div
                className="blog-content"
                data-aos="fade-right"
                data-aos-delay="200"
              >
                <div className="item blog-title">
                  <img src={CarouselPost1} alt="post-1" />
                  <h3>London Fashion week's continued the evolution</h3>
                  <button className="btn btn-blog">Fashion</button>
                  <span>2 minutes</span>
                </div>
              </div>
              <div
                className="blog-content"
                data-aos="fade-right"
                data-aos-delay="200"
              >
                <div className="blog-title">
                  <img src={CarouselPost2} alt="post-1" />
                  <h3>London Fashion week's continued the evolution</h3>
                  <button className="btn btn-blog">Fashion</button>
                  <span>2 minutes</span>
                </div>
              </div>
              <div
                className="blog-content"
                data-aos="fade-right"
                data-aos-delay="200"
              >
                <div className="blog-title">
                  <img src={CarouselPost3} alt="post-1" />
                  <h3>London Fashion week's continued the evolution</h3>
                  <button className="btn btn-blog">Fashion</button>
                  <span>2 minutes</span>
                </div>
              </div>
            </OwlCarousel>
          </div>
        </div>
      </section>
    );
  }
}
