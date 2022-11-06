import { Container } from "react-bootstrap";
const Portofolio = () => {
  return (
    <Container>
      <div className="container">
        <h2 className="text-intro text-light">Portofolio</h2>
        <div className="box1"></div>
        <div className="box2"></div>
        <h3 className="hasil">
          Hasil Karya Karya Web Yang Saya Buat Sendiri,Dan Telah Di Publick{" "}
          <br />
          Menggunakan Hosting Berbayar Dan Gratis,Berbasis Front End Dan Back
          End .
        </h3>
      </div>
      <div className="container">
        <div
          className="box-porto-one animate__animated animate__zoomIn animate_delay_1s animate__slow"
          // data-aos="flip-left"
          // data-aos-duration="1000"
          // data-aos-delay="500"
        >
          <img className="bgporto"></img>
          <img className="bgcake"></img>
          <h3 className="fw-bold">Website Theme Cake</h3>
          <span className="fw-bold">
            Website Bertema Cake Dan Dibuat Menggunakan Framework React.js Not
            Responsive .
          </span>
          <a href="https://cakeandcoockie.lovestoblog.com/">
            <input type="button" value={"view"} />
          </a>
        </div>
        <div className="box-porto-two animate__animated animate__zoomIn animate__delay-2s animate__slow">
          <img className="bgporto"></img>
          <img className="bgcoffe"></img>
          <h3 className="fw-bold">Website Theme Coffe</h3>
          <span className="fw-bold">
            Website Bertema Coffe Dan Dibuat Menggunakan Framework Bootstrap
            Dibantu Html,Css,Js Responsive.
          </span>
          <a href="https://yogasetiawanku.github.io/cofeeen0w/">
            <input type="button" value={"view"} />
          </a>
        </div>
        <div className="box-porto-three animate__animated animate__zoomIn animate__delay-3s animate__slow">
          <img className="bgporto"></img>
          <img className="bggym"></img>
          <h3 className="fw-bold">Website Theme Gym</h3>
          <span className="fw-bold">
            Website Bertema Gym Dan Dibuat Menggunakan Framework React.js
            Responsive .
          </span>
          <a href="https://yogasetiawanku.github.io/myprojectgym/">
            <input type="button" value={"view"} />
          </a>
        </div>
        <div className="box-porto-four animate__animated animate__zoomIn animate__delay-4s animate__slow">
          <img className="bgporto"></img>
          <img className="bgforum"></img>
          <h3 className="fw-bold">Website Theme Forum Chat</h3>
          <span className="fw-bold">
            Website Bertema Forum Chat Dibuat Menggunakan Framework Bootstrap
            ,Html,Css,Js,Php Responsive .
          </span>
          <a href="https://forumchat.epizy.com/">
            <input type="button" value={"view"} />
          </a>
        </div>
        <div className="box-porto-five animate__animated animate__zoomIn animate__delay-5s animate__slow">
          <img className="bgporto"></img>
          <img className="bgportofol"></img>
          <h3 className="fw-bold">Website Theme Forum Chat</h3>
          <span className="fw-bold">
            Website Bertema Forum Chat Dibuat Menggunakan Framework Bootstrap
            ,Html,Css,Js,Php Responsive .
          </span>
          <a href="https://yogasetiawanxsaintz.github.io/yogasetiawan.github.io/">
            <input type="button" value={"view"} />
          </a>
        </div>
      </div>
    </Container>
  );
};
export default Portofolio;
