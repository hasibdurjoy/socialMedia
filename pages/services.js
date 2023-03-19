import Link from "next/link";
import BankIcon from "../src/components/BankIcon";
import Betting from "../src/components/BettingIcon";
import CryptoIcon from "../src/components/CryptoIcon";
import FeedbackSectionChart from "../src/components/FeedbackSectionChart";
import PageBanner from "../src/components/PageBanner";
import SimpleFaq from "../src/components/SimpleFaq";
import LatestServices from "../src/components/slider/LatestServices";
import SocialIcon from "../src/components/SocialIcon";
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
                  <BankIcon />
                </div>
                <div className="text">
                  <h3 className="title">Banking</h3>
                </div>
                <a href="/banking" className="icon-btn">
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
                  <CryptoIcon />
                </div>
                <div className="text">
                  <h3 className="title">Crypto Exchange</h3>
                </div>
                <a href="/crypto" className="icon-btn">
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
                  <Betting />
                </div>
                <div className="text">
                  <h3 className="title">Betting account</h3>
                </div>
                <a href="/betting" className="icon-btn">
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
                  <SocialIcon />
                </div>
                <div className="text">
                  <h3 className="title">Social Account</h3>
                </div>
                <a href="/social" className="icon-btn">
                  <i className="fas fa-arrow-right" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};
export default Services;
