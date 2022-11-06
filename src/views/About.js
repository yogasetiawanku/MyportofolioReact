import { Container } from "react-bootstrap";
export function About() {
  function bgnew() {
    var element = document.getElementById("bgfoto");
    element.classList.toggle("mystyle");
  }
  return (
    <Container>
      <div className="container">
        <h2 className="text-intro text-light">About Me</h2>
        <div className="box1"></div>
        <div className="box2"></div>
      </div>
      <div className="container mt-4 text-light">
        <h4 style={{ textShadow: "1px 1px 1px purple" }}>
          I'm yoga setiawan<h4 className="web-dev">web developer</h4>
        </h4>
      </div>
      <div className="container text-light mt-4">
        <h6>
          Saya adalah seseorang web developer Front End dan Back End walau saya
          tidak terlalu experince di bidang framework php tapi saya bisa
          menggunakan php dengan lancar dan aman disisi Back End,kelebihan saya
          berada pada sisi Front End dalam bahasa Html,Css,JavaScript, dan juga
          frameworknya terutama di Bootstrap,Tailwind Dan React Js,Dan saya juga
          suka belajar hal yang lebih dan tantangan dalam sebuah web
          developer,karena web developer adalah cita cita saya.
        </h6>
      </div>
      {/* text 1 */}
      <div className="container">
        <h5 className="text-light font-res mt-4 fw-bold">
          Birthday : 07 June 2003
        </h5>
        <h6 className="text-secondary span1"></h6>
        <h5 className="text-light mt-3 font-res fw-bold">Website : - </h5>
        <h6 className="text-secondary span1"></h6>
        <h5 className="text-light mt-3 font-res fw-bold">Degree : Smk</h5>
        <h6 className="text-secondary span1"></h6>
        <h5 className="text-light mt-3 font-res fw-bold">City : Surabaya</h5>
        <h6 className="text-secondary span1"></h6>
      </div>
      {/* text 2 */}
      <div className="container">
        <div className="left">
          <h5 className="text-light font-res mt-4 fw-bold">Age : 19</h5>
          <h6 className="text-secondary span1"></h6>
          <h5 className="text-light mt-3 font-res fw-bold">
            Email : yogas9079@gmail.com
          </h5>
          <h6 className="text-secondary span1"></h6>
          <h5 className="text-light mt-3 font-res fw-bold">
            Phone : +62 8585 729 2852
          </h5>
          <h6 className="text-secondary span1"></h6>
          <h5 className="text-light mt-3 font-res fw-bold">
            Freelance : Available
          </h5>
          <h6 className="text-secondary span1"></h6>
        </div>
        <div className="container"></div>
      </div>
      <div className="container left2 text-light">
        <div className="left-html-bg1">
          <div className="left-html-bg2">
            <span className="span2">Html</span>
            <span className="span3">80%</span>
          </div>
        </div>
        <div className="left-html-bg1">
          <div className="left-css-bg2">
            <span className="span2">Css</span>
            <span className="span3">75%</span>
          </div>
        </div>
        <div className="left-html-bg1">
          <div className="left-js-bg2">
            <span className="span2">Javascript</span>
            <span className="span3">70%</span>
          </div>
        </div>
        <div className="left-html-bg1">
          <div className="left-js-bg2">
            <span className="span2">Php</span>
            <span className="span3">70%</span>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="bgfotosaya" id="bgfoto">
          <center>
            <span
              className="text-light fw-bold"
              style={{ textShadow: "2px 2px 2px black", fontSize: "13px" }}
            >
              Yoga Setiawan
            </span>
            <span className="fw-bold spn2">
              Belajarlah Dari Diri Sendiri Terlebih Dahulu,{" "}
            </span>
            <span className="fw-bold spn1">
              Lalu Belajarlah Dari Orang Lain
            </span>
          </center>
          <button
            onClick={bgnew}
            className="text-dark btn btn-info border-dark fw-bold"
          >
            Switch Color
          </button>
          <img className="fotosaya"></img>
        </div>
      </div>
    </Container>
  );
}
