import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
// import headerImg from "../assets/img/header-img.svg";
import { ArrowRightCircle } from 'react-bootstrap-icons';
import 'animate.css';
import TrackVisibility from 'react-on-screen';
// import colorSharp from "../assets/img/color-sharp2.png"

export const Banner = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState('');
  const [delta, setDelta] = useState(200 - Math.random() * 100);
  const [index, setIndex] = useState(1);
  const toRotate = [ "Web Developer", "Web Designer", "Full Stack Developer", "UI/UX Designer" ];
  const period = 200;

  useEffect(() => {
    let ticker = setInterval(() => { 
      tick();
    }, delta);

    return () => { clearInterval(ticker) };
  }, [text])

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta(prevDelta => prevDelta / 2);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setIndex(prevIndex => prevIndex - 1);
      setDelta(period);
    } else if (isDeleting && updatedText === '') {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setIndex(1);
      setDelta(500);
    } else {
      setIndex(prevIndex => prevIndex + 1);
    }
  }

  return (
    <section className="banner" id="home">
      {/* <img className="background-image-right-banner"  alt="Image" /> */}
      <Container style={{marginTop:'-50px'}}>
        <Row className="aligh-items-center">
          <Col xs={12} md={6} xl={7}>
            <TrackVisibility>
              {({ isvisible }) =>
              <div className={isvisible ? "animate__animated animate__fadeIn" : ""}>
                <h2>{`Hello, I'm`}</h2>
                <h1>{`ASHUTOSH PAWAR`} </h1> <h2 className="txt-rotate" dataperiod="100" data-rotate='[ "Full Stack Developer","Web Developer", "Web Designer", "UI/UX Designer"]'><span className="wrap">{text}</span></h2>
                  <p style={{textAlign: 'justify'}}>A 23 years old learner proficient in a wide array of web technologies, dedicated to crafting captivating websites. A collaborative team member consistently delivering outstanding results, even under tight deadlines. Committed to continuous growth, always eager to enhance technical expertise. Actively searching for opportunities to make a meaningful impact as a full stack developer</p>
                  <div className="banner-buttons">
                      {/* <button onClick={() => console.log('connect')}>Let’s Connect <ArrowRightCircle size={25} /></button> */}
                     <a style={{textDecoration: 'none'}} href="/ASHUTOSH's_RESUME.pdf" target="_blank" rel="noopener noreferrer"> <button>Resume <ArrowRightCircle size={25} /></button> </a>
                  </div>
              </div>}
            </TrackVisibility>
          </Col>
          <Col xs={12} md={6} xl={5}>
            <TrackVisibility>
              {({ isvisible }) =>
                <div className={isvisible ? "animate__animated animate__zoomIn" : ""}>
                  {/* <img src={headerImg} alt="Header Img"/> */}
                </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  )
}
