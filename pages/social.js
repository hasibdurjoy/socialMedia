import Link from "next/link";
import Layout from "../src/layout/Layout";
const Social = () => {
  return (
    <Layout>
      <section
        className="page-banner bg_cover p-r z-1"
        style={{
          backgroundImage: "url(assets/images/service/social.jpg)",
        }}
      >
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-10">
              <div className="page-banner-content text-center">
                <h1 className="page-title">Social</h1>
                <ul className="breadcrumb-link">
                  <li>
                    <Link legacyBehavior href="/">
                      <a>Home</a>
                    </Link>
                  </li>
                  <li className="active">Social</li>
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
                  className="col-md-2 service-item wow fadeInUp mt-5"
                  key={single.name}
                >
                  <div className="img-holder">
                    <img
                      src={`assets/social/${single.img}`}
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
export default Social;

const data = [
  { name: "Twitter", img: "socailmediaotc_twitter_logo.png", text: "lorem" },
  { name: "Facebook", img: "socialmediaotc_facebook_logo.png", text: "lorem" },
  { name: "Gmail", img: "socialmediaotc_gmail_logo.png", text: "lorem" },
  {
    name: "Google voice",
    img: "socialmediaotc_google_voice_logo.png",
    text: "lorem",
  },
  { name: "Telegram", img: "socialmediaotc_telegram_logo.png", text: "lorem" },
  { name: "wechat", img: "socialmediaotc_wechat_logo.png", text: "lorem" },
  { name: "Youtube", img: "socialmediaotc_youtube_logo.png", text: "lorem" },
  { name: "Instagram", img: "socialmediaotc_logo.png", text: "lorem" },
];
