import Link from "next/link";
import Layout from "../src/layout/Layout";
const Betting = () => {
  return (
    <Layout>
      <section
        className="page-banner bg_cover p-r z-1"
        style={{
          backgroundImage: "url(assets/images/service/crypto.jpg)",
        }}
      >
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-10">
              <div className="page-banner-content text-center">
                <h1 className="page-title">Betting</h1>
                <ul className="breadcrumb-link">
                  <li>
                    <Link legacyBehavior href="/">
                      <a>Home</a>
                    </Link>
                  </li>
                  <li className="active">Betting</li>
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
                      src={`assets/betting/${single.img}`}
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
export default Betting;

const data = [
  { name: "10Bet", img: "socialmediaotc_10Bet_logo1.png", text: "lorem" },
  { name: "32red", img: "socialmediaotc_32red_logo.png", text: "lorem" },
  { name: "888sport", img: "socialmediaotc_888sport_logo.png", text: "lorem" },
  { name: "bet365", img: "socialmediaotc_bet365_logo.png", text: "lorem" },
  { name: "Betano", img: "socialmediaotc_Betano_logo.png", text: "lorem" },
  { name: "Betfair", img: "socialmediaotc_Betfair_logo.png", text: "lorem" },
  { name: "betway", img: "socialmediaotc_betway_logo.png", text: "lorem" },
  {
    name: "Boylesports",
    img: "socialmediaotc_Boylesports_logo.png",
    text: "lorem",
  },
  { name: "bWin", img: "socialmediaotc_bWin_logo.png", text: "lorem" },
  {
    name: "interWetten",
    img: "socialmediaotc_interWetten_logo.png",
    text: "lorem",
  },
  { name: "Mybet", img: "socialmediaotc_Mybet_logo.png", text: "lorem" },
  {
    name: "paddypower",
    img: "socialmediaotc_paddypower_logo.png",
    text: "lorem",
  },
  {
    name: "Pokerstar",
    img: "socialmediaotc_Pokerstar_logo.png",
    text: "lorem",
  },
  { name: "skybet", img: "socialmediaotc_skybet_logo.png", text: "lorem" },
  { name: "unibet", img: "socialmediaotc_unibet_logo.png", text: "lorem" },
];
