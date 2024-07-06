import React, { useEffect, useRef } from "react";

import hero from "./data/hero.json";
import Typed from "typed.js";

const Home = () => {
  const typedRef = useRef(null);
  useEffect(() => {
    const options = {
      strings: [
        "Welme to my profile",
        "My Name is Shivam Gehani",
        "I'm full stack developer",
        "Androide Developer (React Native)",
      ],
      typeSpeed: 50,
      backSpeed: 50,
      loop: true,
    };

    const typed = new Typed(typedRef.current, options);

    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <>
      <div className="container home" id="home">
        <div className="left" data-aos="fade-up-right" data-aos-duration="1000">
          <h1 ref={typedRef}></h1>
          
          <a href="https://drive.google.com/file/d/1fReF94jlTRFSw9u82P-kohZHGAHulUBZ/view?usp=sharing"  className="btn btn-outline-warning my-3">
                     Resume 
                    </a>

         
        </div>
        <div className="right">
          <div className="img" data-aos="fade-up-left" data-aos-duration="1000">
            <img src={`/assets/${hero.imgSrc}`} alt="hero" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
