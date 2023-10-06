import { projects } from "../data/Projects";

export const Slider = () => {
  return (
    <div className="slide-container">
      {projects.map((project) => (
        <div className="card-wrapper swiper-slide" key={project.id}>
          <div className="card swiper-card">
            <div className="card-image">
              <img src={project.image} alt="" />
            </div>
            <div className="card-content">
              <h2 className="name">{project.title}</h2>
              <p className="description">{project.description}</p>
            </div>

            <div className="tags-content">
              <div className="tags">
                <h2>{project.tags[0]}</h2>
                <h2>{project.tags[1]}</h2>
              </div>
            </div>
            <div className="card-btn">
              <a href={project.visit} target="_blank" rel="noopener noreferrer">
                Demo
              </a>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
