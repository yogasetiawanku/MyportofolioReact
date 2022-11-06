import { Container } from "react-bootstrap";
const Service = () => {
  function btnhtml() {
    var element = document.getElementById("fuldev");
    element.classList.toggle("html-dev");
  }
  function btnphp() {
    var phpp = document.getElementById("fulphp");
    phpp.classList.toggle("php-dev");
  }
  function btnjs() {
    var phpp = document.getElementById("fuljs");
    phpp.classList.toggle("js-dev");
  }
  function btncss() {
    var phpp = document.getElementById("fulcss");
    phpp.classList.toggle("css-dev");
  }
  function btnbts() {
    var phpp = document.getElementById("fulbts");
    phpp.classList.toggle("bts-dev");
  }
  function btnreact() {
    var phpp = document.getElementById("fulreact");
    phpp.classList.toggle("react-dev");
  }
  return (
    <Container>
      <div className="container">
        <h2 className="text-intro text-light">Services</h2>
        <div className="box1"></div>
        <div className="box2"></div>
      </div>
      <div className="container">
        <div className="web-developer-service3 fw-bold animate__animated animate__lightSpeedInLeft text-light">
          <h6
            style={{
              marginLeft: "120px",
              fontSize: "18px",
              position: "absolute",
              marginTop: "30px",
              fontStyle: "italic",
              textShadow: "1px 1px 1px black",
            }}
          >
            Web Developer Design
          </h6>
          <h6
            style={{
              marginLeft: "120px",
              fontSize: "13px",
              position: "absolute",
              marginTop: "75px",
              textShadow: "1px 1px 1px black",
            }}
          >
            Pembuatan Website Berbasis
          </h6>
          <h6
            style={{
              marginLeft: "120px",
              fontSize: "13px",
              position: "absolute",
              marginTop: "100px",
              textShadow: "1px 1px 1px black",
            }}
          >
            Fullstack Html,Css,js,Php .
          </h6>
          <button onClick={btnhtml} className="btnhtml">
            !
          </button>
          <img className="imgfullstack"></img>
        </div>
        <div className="web-developer-service4 fw-bold text-light animate__animated animate__lightSpeedInLeft ">
          <h6
            style={{
              marginLeft: "120px",
              fontSize: "18px",
              position: "absolute",
              marginTop: "30px",
              fontStyle: "italic",
              textShadow: "1px 1px 1px black",
            }}
          >
            Web Design Php
          </h6>
          <h6
            style={{
              marginLeft: "120px",
              fontSize: "13px",
              position: "absolute",
              marginTop: "65px",
              textShadow: "1px 1px 1px black",
            }}
          >
            Pembuatan Website Berbasis
          </h6>
          <h6
            style={{
              marginLeft: "120px",
              fontSize: "13px",
              position: "absolute",
              marginTop: "90px",
              textShadow: "1px 1px 1px black",
            }}
          >
            Khusus Php Untuk Server Database
          </h6>
          <h6
            style={{
              marginLeft: "120px",
              fontSize: "13px",
              position: "absolute",
              marginTop: "115px",
              textShadow: "1px 1px 1px black",
            }}
          >
            MySQL .
          </h6>
          <button onClick={btnphp} className="btnphp">
            !
          </button>
          <img className="imgphp"></img>
        </div>
      </div>
      <div className="container">
        <div className="leftweb">
          <div className="web-developer-service text-light fw-bold animate__animated animate__lightSpeedInLeft">
            <h6
              style={{
                marginLeft: "120px",
                fontSize: "18px",
                position: "absolute",
                marginTop: "30px",
                fontStyle: "italic",
                textShadow: "1px 1px 1px black",
              }}
            >
              Web Design JavaScript
            </h6>
            <h6
              style={{
                marginLeft: "120px",
                fontSize: "13px",
                position: "absolute",
                marginTop: "75px",
                textShadow: "1px 1px 1px black",
              }}
            >
              Pembuatan Website Berbasis
            </h6>
            <h6
              style={{
                marginLeft: "120px",
                fontSize: "13px",
                position: "absolute",
                marginTop: "100px",
                textShadow: "1px 1px 1px black",
              }}
            >
              javascript dikombinasi dengan html dan css .
            </h6>
            <button onClick={btnjs} className="btnjs">
              !
            </button>
            <img className="imgjs"></img>
          </div>
          <div className="web-developer-service text-light fw-bold animate__animated animate__lightSpeedInLeft">
            <h6
              style={{
                marginLeft: "120px",
                fontSize: "18px",
                position: "absolute",
                marginTop: "30px",
                fontStyle: "italic",
                textShadow: "1px 1px 1px black",
              }}
            >
              Web Design Html & Css
            </h6>
            <h6
              style={{
                marginLeft: "120px",
                fontSize: "13px",
                position: "absolute",
                marginTop: "75px",
                textShadow: "1px 1px 1px black",
              }}
            >
              Pembuatan Website Berbasis
            </h6>
            <h6
              style={{
                marginLeft: "120px",
                fontSize: "13px",
                position: "absolute",
                marginTop: "100px",
                textShadow: "1px 1px 1px black",
              }}
            >
              Html & Css Murni.
            </h6>
            <button onClick={btncss} className="btncss">
              !
            </button>
            <img className="imghtmlcss"></img>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="leftweb2">
          <div className="web-developer-service text-light fw-bold animate__animated animate__lightSpeedInLeft">
            <h6
              style={{
                marginLeft: "120px",
                fontSize: "18px",
                position: "absolute",
                marginTop: "30px",
                fontStyle: "italic",
                textShadow: "1px 1px 1px black",
              }}
            >
              Web Design Bootstrapt
            </h6>
            <h6
              style={{
                marginLeft: "120px",
                fontSize: "13px",
                position: "absolute",
                marginTop: "75px",
                textShadow: "1px 1px 1px black",
              }}
            >
              Pembuatan Website Berbasis
            </h6>
            <h6
              style={{
                marginLeft: "120px",
                fontSize: "13px",
                position: "absolute",
                marginTop: "95px",
                textShadow: "1px 1px 1px black",
              }}
            >
              Framework Bootstrapt,Dibantu
            </h6>
            <h6
              style={{
                marginLeft: "120px",
                fontSize: "13px",
                position: "absolute",
                marginTop: "115px",
                textShadow: "1px 1px 1px black",
              }}
            >
              Dengan Html Dan Sedikit Css .
            </h6>
            <button onClick={btnbts} className="btnbts">
              !
            </button>
            <img className="imgbootstrap"></img>
          </div>
          <div className="web-developer-service text-light fw-bold animate__animated animate__lightSpeedInLeft">
            <h6
              style={{
                marginLeft: "120px",
                fontSize: "18px",
                position: "absolute",
                marginTop: "30px",
                fontStyle: "italic",
                textShadow: "1px 1px 1px black",
              }}
            >
              Web Design React Js
            </h6>
            <h6
              style={{
                marginLeft: "120px",
                fontSize: "13px",
                position: "absolute",
                marginTop: "75px",
                textShadow: "1px 1px 1px black",
              }}
            >
              Pembuatan Website Berbasis
            </h6>
            <h6
              style={{
                marginLeft: "120px",
                fontSize: "13px",
                position: "absolute",
                marginTop: "95px",
                textShadow: "1px 1px 1px black",
              }}
            >
              Framework React Js,Dibantu
            </h6>
            <h6
              style={{
                marginLeft: "120px",
                fontSize: "13px",
                position: "absolute",
                marginTop: "115px",
                textShadow: "1px 1px 1px black",
              }}
            >
              Dengan Bootstrapt Dan Sedikit Css .
            </h6>
            <button onClick={btnreact} className="btnreact">
              !
            </button>
            <img className="imgreact"></img>
          </div>
        </div>
      </div>
      <div className="container">
        <div id="fuldev" className="info-html">
          <h6>Pembuatan Web Full Berbasis Front End Dan Back End.</h6>
          <span>.......................</span>
          <h4>
            Proses Pengerjaan Kurang Lebih 1 Minggu Max 3 Hari Ketika Ada
            Designnya/Gambaran Projectnya.
          </h4>
          <h4 id="h4">Created By : Yoga Setiawan .</h4>
          <span id="span2">.......................</span>
          <a href="https://wa.me/6285857292852">
            <input type="button" className="fw-bold" value="Cekout Now" />
          </a>
        </div>
        <div id="fulphp" className="info-php">
          <h6>Pembuatan Web Full Berbasis Back End.</h6>
          <span>.......................</span>
          <h4>
            Proses Pengerjaan Kurang Lebih 1 Minggu Max 3 Hari Ketika Ada
            Designnya/Gambaran Projectnya.Khusus Untuk Back End/Data Base .
          </h4>
          <h4 id="h4">Created By : Yoga Setiawan .</h4>
          <span id="span3">.......................</span>
          <a href="https://wa.me/6285857292852">
            <input type="button" className="fw-bold" value="Cekout Now" />
          </a>
        </div>
        <div id="fuljs" className="info-js">
          <h6>Pembuatan Web Full Berbasis Javascript,Html Dan Css</h6>
          <span>.......................</span>
          <h4>
            Proses Pengerjaan Kurang Lebih 1 Minggu Max 3 Hari Ketika Ada
            Designnya/Gambaran Projectnya.Khusus Untuk Front End .
          </h4>
          <h4 id="h4">Created By : Yoga Setiawan .</h4>
          <span id="span3">.......................</span>
          <a href="https://wa.me/6285857292852">
            <input type="button" className="fw-bold" value="Cekout Now" />
          </a>
        </div>
        <div id="fulcss" className="info-css">
          <h6>Pembuatan Web Full Berbasis Front End Html & Css Murni .</h6>
          <span>.......................</span>
          <h4>
            Proses Pengerjaan Kurang Lebih 1 Minggu Max 3 Hari Ketika Ada
            Designnya/Gambaran Projectnya.Khusus Untuk Front End .
          </h4>
          <h4 id="h4">Created By : Yoga Setiawan .</h4>
          <span id="span3">.......................</span>
          <a href="https://wa.me/6285857292852">
            <input type="button" className="fw-bold" value="Cekout Now" />
          </a>
        </div>
        <div id="fulbts" className="info-bts">
          <h6>Pembuatan Web Full Berbasis Front End Bootstrapt .</h6>
          <span>.......................</span>
          <h4>
            Proses Pengerjaan Kurang Lebih 1 Minggu Max 3 Hari Ketika Ada
            Designnya/Gambaran Projectnya.Khusus Untuk Front End .
          </h4>
          <h4 id="h4">Created By : Yoga Setiawan .</h4>
          <span id="span3">.......................</span>
          <a href="https://wa.me/6285857292852">
            <input type="button" className="fw-bold" value="Cekout Now" />
          </a>
        </div>
        <div id="fulreact" className="info-react">
          <h6>Pembuatan Web Full Berbasis Front End/Back End React Js .</h6>
          <span>.......................</span>
          <h4>
            Proses Pengerjaan Kurang Lebih 1 Minggu Max 3 Hari Ketika Ada
            Designnya/Gambaran Projectnya.Khusus Untuk Front End/Back End .
          </h4>
          <h4 id="h4">Created By : Yoga Setiawan .</h4>
          <span id="span3">.......................</span>
          <a href="https://wa.me/6285857292852">
            <input type="button" className="fw-bold" value="Cekout Now" />
          </a>
        </div>
      </div>
    </Container>
  );
};

export default Service;
