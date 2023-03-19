import Link from "next/link";
import Slider from "react-slick";
import Counter from "../src/components/Counter";
import FeedbackSectionChart from "../src/components/FeedbackSectionChart";
import SimpleFaq from "../src/components/SimpleFaq";
import LatestServices from "../src/components/slider/LatestServices";
import Layout from "../src/layout/Layout";
import { partnerSliderOne, projectsSliderOne } from "../src/sliderProps";
const Index = () => {
  return (
    <Layout>
      {/*====== Start Hero Section ======*/}
      <section
        className="banner-one bg_cover p-r z-1"
        style={{ backgroundImage: "url(assets/images/hero/hero-bg-1.jpg)" }}
      >
        <div className="shape shape-one">
          <span>
            <img src="assets/images/hero/hero-one_shape-1.png" alt="" />
          </span>
        </div>
        <div className="shape shape-two">
          <span>
            <img src="assets/images/hero/circel.png" alt="" />
          </span>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-xl-7 col-lg-10">
              {/*=== Hero Content ===*/}
              <div className="hero-content text-white">
                <span className="tag-line wow fadeInDown" data-wow-delay=".5s">
                  Business Agency
                </span>
                <h1 className="wow fadeInUp" data-wow-delay=".7s">
                  We Provide Digital Business Solutions
                </h1>
                <div className="hero-button wow fadeInUp" data-wow-delay=".9s">
                  <Link legacyBehavior href="/about">
                    <a className="main-btn btn-red">Explore More</a>
                  </Link>
                  <Link legacyBehavior href="/services">
                    <a className="main-btn filled-btn filled-white">
                      Our Services
                    </a>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*====== End Hero Section ======*/}
      {/*====== Start About Section ======*/}
      <section className="about-section-one pt-125 pb-70">
        <div className="shape shape-one">
          <span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
              width="293px"
              height="849px"
            >
              <path
                fillRule="evenodd"
                fill="rgb(250, 250, 250)"
                d="M292.858,848.283 L45.529,527.037 L183.238,230.105 L0.311,0.959 L292.858,0.959 L292.858,848.283 Z"
              />
            </svg>
          </span>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              {/*=== About Content Box ===*/}
              <div className="about-content-box content-box-gap wow fadeInLeft mb-50">
                <div className="section-title section-title-left">
                  <span className="sub-title">About Company</span>
                  <h2>Help to Create Great Business Future </h2>
                </div>
                <p>
                  Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                  accusantium doloremque laudantium totam rem aperiam eaque
                  abillo inventore veritatis quasi architecto beatae vitae dicta
                  sunt explicabo nemo enim ipsam voluptatem quia.
                </p>
                <Link legacyBehavior href="/about">
                  <a className="btn-link">Learn More Us</a>
                </Link>
              </div>
            </div>
            <div className="col-lg-6">
              {/*=== Quote Box One ===*/}
              <div className="quote-box-one ml-lg-70 mb-50">
                <h2>Effective method for disease detection.</h2>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*====== End Features Section ======*/}
      {/*====== Start Service Section ======*/}
      <section
        className="service-section bg_cover pt-125 p-r z-1 pb-150"
        style={{ backgroundImage: "url(assets/images/bg/service-bg-1.jpg)" }}
      >
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-6 col-lg-10">
              {/*=== Common Heading ===*/}
              <div className="section-title text-center text-white mb-60 wow fadeInDown">
                <span className="sub-title">Latest Services</span>
                <h2>Amazing Business Services</h2>
              </div>
            </div>
          </div>
          {/*=== Service Slider ===*/}
          <LatestServices />
        </div>
      </section>
      {/*====== End Service Section ======*/}
      {/*====== Start Fact Section ======*/}
      <section className="fact-section p-r z-1 pt-130">
        <div className="container">
          <div className="row">
            <div className="col-xl-7 col-lg-12">
              {/*=== Fact image box ===*/}
              <div className="fact-img_one-box text-right pr-lg-70 mb-50">
                <div className="quote-box-three text-left wow fadeInLeft z-1">
                  <h3>
                    We Have 25 Years Of Experience in Business Consulting
                    Services
                  </h3>
                  <div className="author-thumb-title d-flex align-items-center">
                    <div className="author-thumb">
                      <img
                        src="assets/images/author-1.jpg"
                        alt="Author Image"
                      />
                    </div>
                    <div className="author-title">
                      <h4 className="title">Joseh G. Coleman</h4>
                      <p className="position">CEO &amp; Founder</p>
                    </div>
                  </div>
                </div>
                <img
                  src="assets/images/gallery/img-1.jpg"
                  className="wow fadeInDown"
                  alt="Fact image"
                />
              </div>
            </div>
            {/* deleted from here */}
          </div>
        </div>
      </section>
      {/*====== End Fact Section ======*/}
      {/*====== Start Project Section ======*/}
      <section className="project-section pt-75 pb-100">
        <div className="container-fluid">
          <div className="row justify-content-center">
            <div className="col-xl-8 col-lg-10">
              {/*=== Common Heading ===*/}
              <div className="section-title text-center mb-60 wow fadeInDown">
                <span className="sub-title">Latest Project &amp; Case</span>
                <h2>Let’s Looks Our Global Projects</h2>
              </div>
            </div>
          </div>
          {/*=== Project Slider ===*/}
          <Slider {...projectsSliderOne} className="projects-slider-one">
            {/*=== Project Item ===*/}
            <div className="project-item wow fadeInUp">
              <div className="img-holder">
                <img
                  src="assets/images/project/img-1.jpg"
                  alt="Project Image"
                />
                <div className="project-hover">
                  <div className="hover-content d-flex">
                    <Link legacyBehavior href="/project-details">
                      <a className="icon-btn">
                        <i className="far fa-arrow-right" />
                      </a>
                    </Link>
                    <div className="icon">
                      <i className="flaticon-finance" />
                    </div>
                    <div className="text">
                      <h3 className="title">
                        <Link legacyBehavior href="/project-details">
                          <a>Financial Management</a>
                        </Link>
                      </h3>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/*=== Project Item ===*/}
            <div className="project-item wow fadeInUp">
              <div className="img-holder">
                <img
                  src="assets/images/project/img-2.jpg"
                  alt="Project Image"
                />
                <div className="project-hover">
                  <div className="hover-content d-flex">
                    <Link legacyBehavior href="/project-details">
                      <a className="icon-btn">
                        <i className="far fa-arrow-right" />
                      </a>
                    </Link>
                    <div className="icon d-flex">
                      <i className="flaticon-finance" />
                    </div>
                    <div className="text">
                      <h3 className="title">
                        <Link legacyBehavior href="/project-details">
                          <a>Financial Management</a>
                        </Link>
                      </h3>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/*=== Project Item ===*/}
            <div className="project-item wow fadeInUp">
              <div className="img-holder">
                <img
                  src="assets/images/project/img-3.jpg"
                  alt="Project Image"
                />
                <div className="project-hover">
                  <div className="hover-content d-flex">
                    <Link legacyBehavior href="/project-details">
                      <a className="icon-btn">
                        <i className="far fa-arrow-right" />
                      </a>
                    </Link>
                    <div className="icon">
                      <i className="flaticon-finance" />
                    </div>
                    <div className="text">
                      <h3 className="title">
                        <Link legacyBehavior href="/project-details">
                          <a>Financial Management</a>
                        </Link>
                      </h3>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/*=== Project Item ===*/}
            <div className="project-item wow fadeInUp">
              <div className="img-holder">
                <img
                  src="assets/images/project/img-4.jpg"
                  alt="Project Image"
                />
                <div className="project-hover">
                  <div className="hover-content d-flex">
                    <Link legacyBehavior href="/project-details">
                      <a className="icon-btn">
                        <i className="far fa-arrow-right" />
                      </a>
                    </Link>
                    <div className="icon">
                      <i className="flaticon-finance" />
                    </div>
                    <div className="text">
                      <h3 className="title">
                        <Link legacyBehavior href="/project-details">
                          <a>Financial Management</a>
                        </Link>
                      </h3>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/*=== Project Item ===*/}
            <div className="project-item wow fadeInUp">
              <div className="img-holder">
                <img
                  src="assets/images/project/img-5.jpg"
                  alt="Project Image"
                />
                <div className="project-hover">
                  <div className="hover-content d-flex">
                    <Link legacyBehavior href="/project-details">
                      <a className="icon-btn">
                        <i className="far fa-arrow-right" />
                      </a>
                    </Link>
                    <div className="icon">
                      <i className="flaticon-finance" />
                    </div>
                    <div className="text">
                      <h3 className="title">
                        <Link legacyBehavior href="/project-details">
                          <a>Financial Management</a>
                        </Link>
                      </h3>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/*=== Project Item ===*/}
            <div className="project-item wow fadeInUp">
              <div className="img-holder">
                <img
                  src="assets/images/project/img-2.jpg"
                  alt="Project Image"
                />
                <div className="project-hover">
                  <div className="hover-content d-flex">
                    <Link legacyBehavior href="/project-details">
                      <a className="icon-btn">
                        <i className="far fa-arrow-right" />
                      </a>
                    </Link>
                    <div className="icon">
                      <i className="flaticon-finance" />
                    </div>
                    <div className="text">
                      <h3 className="title">
                        <Link legacyBehavior href="/project-details">
                          <a>Financial Management</a>
                        </Link>
                      </h3>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Slider>
        </div>
      </section>
      {/*====== End Project Section ======*/}
      {/*====== Start CTA Section ======*/}
      <section
        className="cta-section bg_cover p-r z-1 pt-70 pb-50"
        style={{ backgroundImage: "url(assets/images/bg/cta-bg-1.jpg)" }}
      >
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-7">
              {/*=== Common Heading ===*/}
              <div className="section-title text-white mb-30 wow fadeInLeft">
                <h2>Get Free Consultations! We’re Ready to Work Together</h2>
              </div>
            </div>
            <div className="col-lg-5">
              {/*=== CTA Button ===*/}
              <div className="cta-button float-lg-right mb-30 wow fadeInRight">
                <Link legacyBehavior href="/team">
                  <a className="main-btn btn-white">Get Free Consultations</a>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*====== End CTA Section ======*/}
      {/*====== Start Team Section ======*/}
      <section className="team-section pt-10 pb-80">
        {/* deleted from here */}
      </section>
      {/*====== End Team Section ======*/}
      {/*====== Start Feedback Section ======*/}
      <section className="feedback-section p-r z-2 pb-130">
        <FeedbackSectionChart />
      </section>
      {/*====== End FAQ Section ======*/}
      {/*====== Start Partners Section ======*/}
      <section className="partners-section dark-black-bg pt-60 pb-60">
        <div className="container">
          {/*=== Partner Slider ===*/}
          <Slider {...partnerSliderOne} className="partner-slider-one">
            <div className="partner-item">
              <div className="partner-img">
                <a href="#">
                  <img
                    src="assets/images/partners/logo-1.png"
                    alt="Partner Image"
                  />
                </a>
              </div>
            </div>
            <div className="partner-item">
              <div className="partner-img">
                <a href="#">
                  <img
                    src="assets/images/partners/logo-2.png"
                    alt="Partner Image"
                  />
                </a>
              </div>
            </div>
            <div className="partner-item">
              <div className="partner-img">
                <a href="#">
                  <img
                    src="assets/images/partners/logo-3.png"
                    alt="Partner Image"
                  />
                </a>
              </div>
            </div>
            <div className="partner-item">
              <div className="partner-img">
                <a href="#">
                  <img
                    src="assets/images/partners/logo-4.png"
                    alt="Partner Image"
                  />
                </a>
              </div>
            </div>
            <div className="partner-item">
              <div className="partner-img">
                <a href="#">
                  <img
                    src="assets/images/partners/logo-5.png"
                    alt="Partner Image"
                  />
                </a>
              </div>
            </div>
            <div className="partner-item">
              <div className="partner-img">
                <a href="#">
                  <img
                    src="assets/images/partners/logo-6.png"
                    alt="Partner Image"
                  />
                </a>
              </div>
            </div>
            <div className="partner-item">
              <div className="partner-img">
                <a href="#">
                  <img
                    src="assets/images/partners/logo-3.png"
                    alt="Partner Image"
                  />
                </a>
              </div>
            </div>
          </Slider>
        </div>
      </section>
      {/*====== End Partners Section ======*/}
      {/*====== Start Blog Section ======*/}
      <section className="blog-section pt-120 pb-10 p-r z-1"></section>
      {/*====== End Blog Section ======*/}
      {/*====== Start Newsletter Section ======*/}
      <section className="newsletter-section black-bg pt-50 pb-40">
        <div className="container">
          <div className="row">
            <div className="col-xl-5 col-lg-12">
              {/*=== Common Heading ===*/}
              <div className="section-title section-title-white wow fadeInLeft">
                <h2>Subscribe Our Newsletter to Get More Updates</h2>
              </div>
            </div>
            <div className="col-xl-7 col-lg-12">
              {/*=== Newsletter Item ===*/}
              <div className="newsletter-from wow fadeInRight">
                <form onSubmit={(e) => e.preventDefault()}>
                  <div className="row align-items-center">
                    <div className="col-lg-8">
                      <div className="form_group">
                        <input
                          type="email"
                          className="form_control"
                          placeholder="Enter Email Address"
                          name="email"
                        />
                        <i className="far fa-envelope" />
                      </div>
                      <div className="form_checkbox">
                        <input
                          type="checkbox"
                          name="checkbox"
                          id="check1"
                          defaultChecked=""
                        />
                        <label htmlFor="check1">
                          <span>
                            I agree to the <a href="#"> Privacy Policy</a>.
                          </span>
                        </label>
                      </div>
                    </div>
                    <div className="col-lg-4">
                      <div className="form-button float-lg-right">
                        <button className="main-btn btn-red">
                          Subscribe Now
                        </button>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};
export default Index;
