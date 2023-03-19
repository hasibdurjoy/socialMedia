import Link from "next/link";
import FeedbackSectionChart from "../src/components/FeedbackSectionChart";
import PageBanner from "../src/components/PageBanner";
import SimpleFaq from "../src/components/SimpleFaq";
import LatestServices from "../src/components/slider/LatestServices";
import Layout from "../src/layout/Layout";
const Services = () => {
  return (
    <Layout>
      <PageBanner pageName={"Our Services"} />
      <section className="features-section pt-130 pb-100">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-8 col-lg-10">
              {/*=== Common Heading ===*/}
              <div className="section-title text-center mb-60 wow fadeInDown">
                <span className="sub-title">What We Offer</span>
                <h2>We Help People &amp; Small Business</h2>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-xl-6 col-lg-12">
              {/*=== Features Item ===*/}
              <div
                className="features-item-two mb-30 d-flex align-items-center wow fadeInUp"
                data-wow-delay=".2s"
              >
                <span className="number">01.</span>
                <div className="icon">
                  <i className="flaticon-pie-chart-1" />
                </div>
                <div className="text">
                  <h3 className="title">Direct Involvement in Assets</h3>
                </div>
                <a href="#" className="icon-btn">
                  <i className="fas fa-arrow-right" />
                </a>
              </div>
            </div>
            <div className="col-xl-6 col-lg-12">
              {/*=== Features Item ===*/}
              <div
                className="features-item-two mb-30 d-flex align-items-center wow fadeInUp"
                data-wow-delay=".3s"
              >
                <span className="number">02.</span>
                <div className="icon">
                  <i className="flaticon-pie-chart-1" />
                </div>
                <div className="text">
                  <h3 className="title">Rich Experience and Wide Expertise</h3>
                </div>
                <a href="#" className="icon-btn">
                  <i className="fas fa-arrow-right" />
                </a>
              </div>
            </div>
            <div className="col-xl-6 col-lg-12">
              {/*=== Features Item ===*/}
              <div
                className="features-item-two mb-30 d-flex align-items-center wow fadeInUp"
                data-wow-delay=".4s"
              >
                <span className="number">03.</span>
                <div className="icon">
                  <i className="flaticon-pie-chart-1" />
                </div>
                <div className="text">
                  <h3 className="title">Openness and Transparency Solutions</h3>
                </div>
                <a href="#" className="icon-btn">
                  <i className="fas fa-arrow-right" />
                </a>
              </div>
            </div>
            <div className="col-xl-6 col-lg-12">
              {/*=== Features Item ===*/}
              <div
                className="features-item-two mb-30 d-flex align-items-center wow fadeInUp"
                data-wow-delay=".5s"
              >
                <span className="number">04.</span>
                <div className="icon">
                  <i className="flaticon-pie-chart-1" />
                </div>
                <div className="text">
                  <h3 className="title">
                    Co-investments Solutions and Planning
                  </h3>
                </div>
                <a href="#" className="icon-btn">
                  <i className="fas fa-arrow-right" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*====== End Faq Section ======*/}
      <section className="service-section-three light-gray-bg pt-125 pb-100 p-r z-1">
        <svg
          className="shape shape-one"
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
          width="632px"
          height="247px"
        >
          <path
            fillRule="evenodd"
            opacity="0.031"
            fill="rgb(26, 26, 26)"
            d="M-0.001,246.994 L239.553,38.424 L460.976,154.553 L631.850,0.292 L631.850,246.994 L-0.001,246.994 Z"
          />
        </svg>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-8 col-lg-10">
              {/*=== Common Heading ===*/}
              <div className="section-title text-center mb-50 wow fadeInDown">
                <span className="sub-title">Latest Services</span>
                <h2>Amazing Business Services</h2>
              </div>
            </div>
          </div>
          {/*=== Service Slider One ===*/}
          <LatestServices />
        </div>
      </section>
      {/*====== Start Pricing Section ======*/}
      <section className="pricing-section pt-125 pb-100">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-8 col-lg-10">
              {/*=== Common Heading ===*/}
              <div className="section-title text-center mb-60 wow fadeInDown">
                <span className="sub-title">Our Pricing Package</span>
                <h2>Amazing Pricing Package</h2>
              </div>
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="col-xl-3 col-lg-4 col-md-6 col-sm-12">
              {/*=== Pricing Item ===*/}
              <div
                className="pricing-item-one mb-60 wow fadeInUp"
                data-wow-delay=".2s"
              >
                <span className="save">Save 100%</span>
                <div className="pricing-header text-center pb-35">
                  <span className="plan">Free Plan</span>
                  <h2 className="price">
                    <span className="currency">$</span>0
                    <span className="sm">.00</span>
                  </h2>
                </div>
                <div className="pricing-body">
                  <ul className="pricing-list">
                    <li className="check">Free Consultations</li>
                    <li className="check">Business Planning</li>
                    <li className="check">Investment Process</li>
                    <li className="uncheck">Market Research</li>
                    <li className="uncheck">Online Support</li>
                  </ul>
                  <Link legacyBehavior href="/pricing">
                    <a className="main-btn btn-black">Start Package</a>
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-lg-4 col-md-6 col-sm-12">
              {/*=== Pricing Item ===*/}
              <div
                className="pricing-item-one mb-60 wow fadeInUp"
                data-wow-delay=".3s"
              >
                <span className="save">Save 25%</span>
                <div className="pricing-header text-center pb-35">
                  <span className="plan">Regular Plan</span>
                  <h2 className="price">
                    <span className="currency">$</span>48
                    <span className="sm">.00</span>
                  </h2>
                </div>
                <div className="pricing-body">
                  <ul className="pricing-list">
                    <li className="check">Free Consultations</li>
                    <li className="check">Business Planning</li>
                    <li className="check">Investment Process</li>
                    <li className="check">Market Research</li>
                    <li className="check">Online Support</li>
                  </ul>
                  <Link legacyBehavior href="/pricing">
                    <a className="main-btn btn-black">Start Package</a>
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-lg-4 col-md-6 col-sm-12">
              {/*=== Pricing Item ===*/}
              <div
                className="pricing-item-one mb-60 wow fadeInUp"
                data-wow-delay=".4s"
              >
                <span className="save">Save 49%</span>
                <div className="pricing-header text-center pb-35">
                  <span className="plan">Standard Plan</span>
                  <h2 className="price">
                    <span className="currency">$</span>48
                    <span className="sm">.00</span>
                  </h2>
                </div>
                <div className="pricing-body">
                  <ul className="pricing-list">
                    <li className="check">Free Consultations</li>
                    <li className="check">Business Planning</li>
                    <li className="check">Investment Process</li>
                    <li className="check">Market Research</li>
                    <li className="check">Online Support</li>
                  </ul>
                  <Link legacyBehavior href="/pricing">
                    <a className="main-btn btn-black">Start Package</a>
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-lg-4 col-md-6 col-sm-12">
              {/*=== Pricing Item ===*/}
              <div
                className="pricing-item-one mb-60 wow fadeInUp"
                data-wow-delay=".5s"
              >
                <span className="save">Save 23%</span>
                <div className="pricing-header text-center pb-35">
                  <span className="plan">Silver Plan</span>
                  <h2 className="price">
                    <span className="currency">$</span>96
                    <span className="sm">.00</span>
                  </h2>
                </div>
                <div className="pricing-body">
                  <ul className="pricing-list">
                    <li className="check">Free Consultations</li>
                    <li className="check">Business Planning</li>
                    <li className="check">Investment Process</li>
                    <li className="check">Market Research</li>
                    <li className="check">Online Support</li>
                  </ul>
                  <Link legacyBehavior href="/pricing">
                    <a className="main-btn btn-black">Start Package</a>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*====== End Faq Section ======*/}
      {/*====== Start Feedback Section ======*/}
      <section className="feedback-section p-r z-2 pb-130">
        <FeedbackSectionChart />
      </section>
    </Layout>
  );
};
export default Services;
