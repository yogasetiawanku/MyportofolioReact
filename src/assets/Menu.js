import { Container } from "react-bootstrap";
const Menu = () => {
  return (
    <Container>
      <div>
        <div className="intro">
          <h5>Hello My Name Is</h5>
          <span
            className="animationintroo"
            data-text="yoga setiawan."
          ></span>{" "}
          <h1
            data-text="I'M a Fullstack Developer And Web Design"
            className="animationintro"
          ></h1>
          <h6 className="intro2">
            Saya Adalah Seorang Fullstack Developer Dan
            <h6 className="pt-1">Bercita cita Sebagai Web Developer,</h6>
          </h6>
          <h6>
            Walau Saya Tidak Terlalu Experince DiDalam Framework Terutama Di
            Laravel,
          </h6>
          <h6>Tetapi Saya Paham Tentang Php.</h6>
        </div>
      </div>
      {/* <button style={{ position: "relative", marginTop: "100px" }}>pp</button> */}
      <Container>
        <image className="fluid img2"></image>
      </Container>
    </Container>
  );
};

export default Menu;
