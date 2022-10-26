import React from "react";
import Hero from "../components/Hero";
import Content from "../components/Content";
// import BeforeAfterSlider from "react-before-after-slider";
import vsco from "../assets/images/vscopage.png";
function AboutPage(props) {
  // const before =
  //   "https://upload.wikimedia.org/wikipedia/commons/f/fc/EAM_Nuvolari_S1_640x480.jpg";
  // const after =
  //   "https://upload.wikimedia.org/wikipedia/commons/b/b3/640x480.jpg";
  return (
    <div>
      <Hero title={props.title} />
      <Content>
        <p>
          Hello, my name is Emil Abraham Zachariah. I'm a graduate on Mobile App
          Design & Development. I build apps and websites as a freelancer. I'm
          also a Image & Video Editor and I'm intrigued about filmmaking &
          photography as a serious hobby. I am a realist & I prefer my work to
          be meticulous.
        </p>
      </Content>
      <Content>
        <a href="https://vsco.co/emilabz/gallery">
          <img className="about-img" src={vsco} />
        </a>

        {/* <BeforeAfterSlider
          before={before}
          after={after}
          width={640}
          height={480}
        /> */}
      </Content>
    </div>
  );
}

export default AboutPage;
