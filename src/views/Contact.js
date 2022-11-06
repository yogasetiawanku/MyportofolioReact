import { Container, Containerd } from "react-bootstrap";
const Contact = () => {
  return (
    <Container>
      <div className="container">
        <h2 className="text-intro text-light">Contact Me</h2>
        <div className="box1"></div>
        <div className="box2"></div>
      </div>
      <div className="container textawal">
        <h2 className="text-light">Have You Any Questions ?</h2>
        <h6
          className="text-light text-center"
          style={{ textShadow: "2px 2px 2px purple" }}
        >
          I'M AT YOUR SERVICE
        </h6>
      </div>
      <div className="container aturicon">
        <div className="iconbts">
          <i class="bi bi-telephone-fill fw-bold"></i>
          <h4 className="fw-bold">Call Us One</h4>
          <span className="fw-bold">+62 858 5729 2852</span>
        </div>
        <div className="iconbts2">
          <i class="bi bi-whatsapp fw-bold"></i>
          <h4 className="fw-bold">Whatsapp Me</h4>
          <span className="fw-bold">+62 858 5729 2852</span>
        </div>
        <div className="iconbts3">
          <i class="bi bi-envelope fw-bold"></i>
          <h4 className="fw-bold">Email Me</h4>
          <span className="fw-bold">yogas9079@gmail.com</span>
        </div>
        <div className="iconbts4">
          <i class="bi bi-instagram fw-bold"></i>
          <h4 className="fw-bold">Instagram Me</h4>
          <span className="fw-bold">@yogaaeslurr</span>
        </div>
        <div className="iconbts5">
          <i class="bi bi-facebook fw-bold"></i>
          <h4 className="fw-bold">Facebook Me</h4>
          <span className="fw-bold">@yogaaeslurr</span>
        </div>
        <div className="iconbts6">
          <i class="bi bi-messenger fw-bold"></i>
          <h4 className="fw-bold">Messenger Me</h4>
          <span className="fw-bold">@yogaaeslurr</span>
        </div>
      </div>
      <div className="container textend">
        <h2
          className="text-light text-center"
          style={{ textShadow: "2px 2px 2px purple" }}
        >
          Send Me On Email
        </h2>
        <h6
          className="text-light text-center"
          style={{ textShadow: "2px 2px 2px purple", fontSize: "13px" }}
        >
          I'M VERY RESPONSE YOUR MESSAGES
        </h6>
      </div>
      <div className="container send ">
        <input
          type="text"
          className="input1 border-secondary"
          placeholder="Name"
        />
        <input
          type="email"
          className="input2 border-secondary"
          placeholder="Email"
        />
        <input
          type="text"
          className="input3 border-secondary"
          placeholder="Subjek"
        />
        <input
          type="text"
          className="input4 border-secondary"
          placeholder="Message"
        />
        <button className="border-light">Send Me</button>
      </div>
    </Container>
  );
};

export default Contact;
