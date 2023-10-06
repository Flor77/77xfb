import { useNav } from "../hooks/useNav";
import { Slider } from "../components/Slider";

const Work = () => {
  const refWork = useNav("Work");
  return (
    <section ref={refWork} id="workSection">
      <div className="work">
        <div className="text">
          <h2>My Work</h2>
          <p>Check out some of my recent work.</p>
        </div>
        <Slider />
      </div>
    </section>
  );
};

export default Work;
