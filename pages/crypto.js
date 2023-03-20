import Link from "next/link";
import Layout from "../src/layout/Layout";
const Crypto = () => {
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
                <h1 className="page-title">Crypto Exchange</h1>
                <ul className="breadcrumb-link">
                  <li>
                    <Link legacyBehavior href="/">
                      <a>Home</a>
                    </Link>
                  </li>
                  <li className="active">Crypto Exchange</li>
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
                <div
                  className="col-lg-3 col-md-4 col-xl-2 col-sm-6 service-item wow fadeInUp mt-5"
                  key={single.name}
                >
                  <div className="img-holder">
                    <img
                      src={`assets/crypto/${single.img}`}
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
                      <Link
                        className="icon-btn"
                        href="https://t.me/socialmediaotc"
                        target="_blank"
                      >
                        <i className="far fa-arrow-right" />
                      </Link>
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
export default Crypto;

const data = [
  { name: "Amazon", img: "socialmediaotc_amazon_logo1.png", text: "lorem" },
  { name: "Binance", img: "socialmediaotc_binance_logo.png", text: "lorem" },
  { name: "BitMart", img: "socialmediaotc_bitmart_logo.png", text: "lorem" },
  { name: "BitMex", img: "socialmediaotc_bitmex_logo.png", text: "lorem" },
  { name: "Bittrex", img: "socialmediaotc_bittrex_logo.png", text: "lorem" },
  { name: "Bybit", img: "socialmediaotc_Bybit_logo.png", text: "lorem" },
  { name: "Cex.io", img: "socialmediaotc_cex.io_logo.png", text: "lorem" },
  { name: "Coinbase", img: "socialmediaotc_coinbase_logo.png", text: "lorem" },
  { name: "Coinlist", img: "socialmediaotc_coinlist_logo.png", text: "lorem" },
  { name: "Coinmama", img: "socialmediaotc_coinmama_logo.png", text: "lorem" },
  {
    name: "Crypto.com",
    img: "socialmediaotc_crypto.com_logo.png",
    text: "lorem",
  },
  {
    name: "Flutterwave",
    img: "socialmediaotc_flutterwave_logo.png",
    text: "lorem",
  },
  { name: "Galxe", img: "socialmediaotc_galxe_logo.png", text: "lorem" },
  { name: "Huobi", img: "socialmediaotc_huobi_logo.png", text: "lorem" },
  { name: "Kucoin", img: "socialmediaotc_kucoin.png", text: "lorem" },
  { name: "Latoken", img: "socialmediaotc_latoken.png", text: "lorem" },
  { name: "Oka", img: "socialmediaotc_logo1.png", text: "lorem" },
  {
    name: "Matrixport",
    img: "socialmediaotc_Matrixport_logo.png",
    text: "lorem",
  },
  { name: "Mexc", img: "socialmediaotc_mexc_logo.png", text: "lorem" },
  { name: "Okcoin", img: "socialmediaotc_okcoin_logo.png", text: "lorem" },
  { name: "Onlyfans", img: "socialmediaotc_onlyfans_logo.png", text: "lorem" },
  { name: "Ozan", img: "socialmediaotc_ozan_logo.png", text: "lorem" },
  { name: "Paxful", img: "socialmediaotc_paxful.png", text: "lorem" },
  {
    name: "Pocketoption",
    img: "socialmediaotc_pocketoption_logo.png",
    text: "lorem",
  },
  { name: "Sandbox", img: "socialmediaotc_sandbox_logo.png", text: "lorem" },
  { name: "Stake", img: "socialmediaotc_stake.com_logo.png", text: "lorem" },
  {
    name: "SupraOracles",
    img: "socialmediaotc_supra_oracles_logo.png",
    text: "lorem",
  },
  { name: "Synaps", img: "socialmediaotc_synaps_logo.png", text: "lorem" },
  { name: "Tidex", img: "socialmediaotc_tidex_logo.png", text: "lorem" },
  {
    name: "Tokensoft",
    img: "socialmediaotc_tokensoft_logo.png",
    text: "lorem",
  },
  { name: "Transak", img: "socialmediaotc_Transak_logo.png", text: "lorem" },
];
