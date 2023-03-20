import Link from "next/link";
import BankIcon from "../BankIcon";
import Betting from "../BettingIcon";
import CryptoIcon from "../CryptoIcon";
import SocialIcon from "../SocialIcon";
const LatestServices = () => {
  return (
    <div className="d-flex align-items-center justify-content-between flex-wrap">
      {/*=== Service Item ===*/}
      <div className="service-item wow fadeInUp mb-20 mb-20">
        <div className="img-holder">
          <img
            src="assets/images/service/banking.jpg"
            alt="service image"
            style={{ height: "300px", width: "350px" }}
          />
        </div>
        <div className="service-content">
          <div className="text">
            <div className="title-icon d-flex align-items-center justify-content-around">
              <BankIcon />
              <h3 className="title">
                <Link legacyBehavior href="/banking">
                  <a>Banking</a>
                </Link>
              </h3>
            </div>
          </div>
          <div className="hover-text text-white">
            <div className="title-icon d-flex">
              <BankIcon />
              <h3 className="title">
                <Link legacyBehavior href="/banking">
                  <a>Banking Service</a>
                </Link>
              </h3>
            </div>
            <p>
              Virtual online banks offer a convenient and cost-effective way to
              manage your finances from anywhere at any time.
            </p>
            <Link legacyBehavior href="/banking">
              <a className="icon-btn">
                <i className="far fa-arrow-right" />
              </a>
            </Link>
          </div>
        </div>
      </div>
      {/*=== Service Item ===*/}
      <div className="service-item wow fadeInUp mb-20">
        <div className="img-holder">
          <img
            src="assets/images/service/crypto.jpg"
            alt="service image"
            style={{ height: "300px", width: "350px" }}
          />
        </div>
        <div className="service-content">
          <div className="text">
            <div className="title-icon d-flex align-items-center justify-content-around">
              <CryptoIcon />
              <h3 className="title " style={{ marginLeft: "10px" }}>
                <Link legacyBehavior href="/crypto">
                  <a>Crypto Exchange</a>
                </Link>
              </h3>
            </div>
          </div>
          <div className="hover-text text-white">
            <div className="title-icon d-flex">
              <CryptoIcon />
              <h3 className="title">
                <Link legacyBehavior href="/crypto">
                  <a>Crypto Exchange</a>
                </Link>
              </h3>
            </div>
            <p>
              Crypto exchanges are online platforms that allow users to buy,
              sell, and trade cryptocurrencies.
            </p>
            <Link legacyBehavior href="/crypto">
              <a className="icon-btn">
                <i className="far fa-arrow-right" />
              </a>
            </Link>
          </div>
        </div>
      </div>
      {/*=== Service Item ===*/}
      <div className="service-item wow fadeInUp mb-20">
        <div className="img-holder">
          <img
            src="assets/images/service/betting.jpg"
            alt="service image"
            style={{ height: "300px", width: "350px" }}
          />
        </div>
        <div className="service-content">
          <div className="text">
            <div className="title-icon d-flex align-items-center justify-content-around">
              <Betting />
              <h3 className="title " style={{ marginLeft: "10px" }}>
                <Link legacyBehavior href="/betting">
                  <a>Betting Account</a>
                </Link>
              </h3>
            </div>
          </div>
          <div className="hover-text text-white">
            <div className="title-icon d-flex">
              <Betting />
              <h3 className="title">
                <Link legacyBehavior href="/betting">
                  <a>Betting Account</a>
                </Link>
              </h3>
            </div>
            <p>
              Gambling websites are online platforms that offer a wide range of
              games of chance, such as casino games, sports betting, and poker.
            </p>
            <Link legacyBehavior href="/betting">
              <a className="icon-btn">
                <i className="far fa-arrow-right" />
              </a>
            </Link>
          </div>
        </div>
      </div>
      {/*=== Service Item ===*/}
      <div className="service-item wow fadeInUp mb-20">
        <div className="img-holder">
          <img
            src="assets/images/service/social.jpg"
            alt="service image"
            style={{ height: "300px", width: "350px" }}
          />
        </div>
        <div className="service-content">
          <div className="text">
            <div className="title-icon d-flex align-items-center justify-content-around">
              <SocialIcon />
              <h3 className="title">
                <Link legacyBehavior href="/social">
                  <a>Social Account</a>
                </Link>
              </h3>
            </div>
          </div>
          <div className="hover-text text-white">
            <div className="title-icon d-flex">
              <SocialIcon />
              <h3 className="title">
                <Link legacyBehavior href="/social">
                  <a>Social Account</a>
                </Link>
              </h3>
            </div>
            <p>
              Social media accounts are online profiles that allow users to
              share and interact with content on social media platforms such as
              Facebook, Twitter, Instagram, and LinkedIn.
            </p>
            <Link legacyBehavior href="/social">
              <a className="icon-btn">
                <i className="far fa-arrow-right" />
              </a>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
export default LatestServices;
