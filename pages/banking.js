import Link from "next/link";
import BankIcon from "../src/components/BankIcon";
import Newsletter from "../src/components/Newsletter";
import PageBanner from "../src/components/PageBanner";
import LatestServices from "../src/components/slider/LatestServices";
import Layout from "../src/layout/Layout";
const Banking = () => {
  return (
    <Layout>
      <section
        className="page-banner bg_cover p-r z-1"
        style={{
          backgroundImage: "url(assets/images/service/banking.jpg)",
        }}
      >
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-10">
              <div className="page-banner-content text-center">
                <h1 className="page-title">Banking</h1>
                <ul className="breadcrumb-link">
                  <li>
                    <Link legacyBehavior href="/">
                      <a>Home</a>
                    </Link>
                  </li>
                  <li className="active">Banking</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section
        className="service-section bg_cover pt-125 p-r z-1 pb-150"
        style={{ backgroundImage: "url(assets/images/bg/service-bg-1.jpg)" }}
      >
        <div className="mx-5 ">
          {/*=== Service Slider ===*/}
          <div className="row align-items-center  flex-wrap">
            {/*=== Service Item ===*/}
            {data.map((single) => {
              return (
                <div className="col-md-2 service-item wow fadeInUp mt-5">
                  <div className="img-holder">
                    <img
                      src={`assets/banking/${single.img}`}
                      alt="service image"
                      style={{ height: "200px", width: "250px" }}
                    />
                  </div>
                  <div className="service-content">
                    <div className="text">
                      <div className="title-icon d-flex align-items-center justify-content-around">
                        <h3 className="title">
                          <Link legacyBehavior href="/service-details">
                            <a>{single.name}</a>
                          </Link>
                        </h3>
                      </div>
                    </div>
                    <div className="hover-text text-white">
                      <div className="title-icon d-flex">
                        <h3 className="title">
                          <Link legacyBehavior href="/service-details">
                            <a>{single.name}</a>
                          </Link>
                        </h3>
                      </div>
                      <p>{single.text}</p>
                      <a
                        className="icon-btn"
                        href="https://t.me/socialmediaotc"
                        target="_blank"
                      >
                        <i className="far fa-arrow-right" />
                      </a>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </Layout>
  );
};
export default Banking;

const data = [
  { name: "Bbva", img: "Bbva.png", text: "lorem" },
  { name: "Black Cat", img: "Black cat card.jpg", text: "lorem" },
  { name: "Bunq", img: "Bunq_logo.png", text: "lorem" },
  { name: "cashapp", img: "cashapp logo.png", text: "lorem" },
  { name: "ICard", img: "ICard logo.jpg", text: "lorem" },
  { name: "Monzo", img: "socialmediaotc_monzo_logo.png", text: "lorem" },
  { name: "N26", img: "socialmediaotc_N26_logo.png", text: "lorem" },
  { name: "Neteller", img: "socialmediaotc_Neteller_logo.jpg", text: "lorem" },
  { name: "Payoneer", img: "socialmediaotc_payoneer_logo.jpg", text: "lorem" },
  { name: "Paypal", img: "socialmediaotc_paypal_logo.png", text: "lorem" },
  { name: "Revolut", img: "socialmediaotc_Revolut_logo.png", text: "lorem" },
  { name: "Skrill", img: "socialmediaotc_skrill_logo.png", text: "lorem" },
  { name: "Vivid", img: "socialmediaotc_Vivid_logo.png", text: "lorem" },
  { name: "Wise", img: "socialmediaotc_Wise_logo.png", text: "lorem" },
  { name: "Zen", img: "socialmediaotc_zen_logo.png", text: "lorem" },
  { name: "Verse", img: "Verse.png", text: "lorem" },
];
