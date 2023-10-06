import React from "react";
import BackgroundAnimation from "../components/BackgroundAnimation";
import { useNav } from "../hooks/useNav";
import { HiArrowNarrowRight } from "react-icons/hi";

const Home = () => {
  const homeRef = useNav("Home");
  const handleClick = () => {
    document
      .getElementById("workSection")
      .scrollIntoView({ behavior: "smooth" });
  };
  return (
    <section ref={homeRef} id="homeSection">
      <div className="home">
        <div className="text">
          <h2>
            Bine ati venit <br /> mai meseriasilor!
          </h2>
        </div>
        <div className="bg-animation">
          <BackgroundAnimation />
        </div>
        <button className="rotate-on-hover" onClick={handleClick}>
          Da o geana
          <span>
            <HiArrowNarrowRight
              className="rotate-icon"
              style={{ marginLeft: "10px", fontSize: "1.4em" }}
            />
          </span>
        </button>
      </div>
    </section>
  );
};

export default Home;
