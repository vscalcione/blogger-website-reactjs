import React, { Component } from "react";
import "./CarouselPostsComponent.css";
import AOS from "aos";
import "aos/dist/aos.css";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

export class CarouselPostsComponent extends Component {
  componentDidMount() {
    AOS.init();
  }

  render() {
    const options = { items: 4 };
    return (
      <section>
        <div className="blog">
          <div className="container">
            <OwlCarousel
              items={3}
              className="owl-carousel owl-theme blog-post owl-theme"
              loop
              nav
              margin={8}
              options={options}
            >
              <div>
                <img
                  src="../../assets/images/Blog-post/blog1.png"
                  alt="post-1"
                />
              </div>
            </OwlCarousel>
            <div className="owl-carousel owl-theme blog-post">
              <div
                className="blog-content"
                data-aos="fade-right"
                data-aos-delay="200"
              >
                <div className="blog-title">
                  <h3>London Fashion week's continued the evolution</h3>
                  <button className="btn btn-blog">Fashion</button>
                  <span>2 minutes</span>
                </div>
              </div>
              <div
                className="blog-content"
                data-aos="fade-in"
                data-aos-delay="200"
              >
                <img src="./assets/Blog-post/post-3.jpg" alt="post-1" />
                <div className="blog-title">
                  <h3>London Fashion week's continued the evolution</h3>
                  <button className="btn btn-blog">Fashion</button>
                  <span>2 minutes</span>
                </div>
              </div>
              <div
                className="blog-content"
                data-aos="fade-left"
                data-aos-delay="200"
              >
                <img src="./assets/Blog-post/post-2.jpg" alt="post-1" />
                <div className="blog-title">
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
                <img src="./assets/Blog-post/post-5.png" alt="post-1" />
                <div className="blog-title">
                  <h3>London Fashion week's continued the evolution</h3>
                  <button className="btn btn-blog">Fashion</button>
                  <span>2 minutes</span>
                </div>
              </div>
            </div>
            <div className="owl-navigation">
              <span className="owl-nav-prev">
                <i className="fas fa-long-arrow-alt-left"></i>
              </span>
              <span className="owl-nav-next">
                <i className="fas fa-long-arrow-alt-right"></i>
              </span>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
