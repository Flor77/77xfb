import Logo from "../assets/FB_3.png";
import {
  FaFacebook,
  FaLinkedin,
  FaGithub,
  FaTwitter,
  FaDiscord,
  FaYoutube,
} from "react-icons/fa";

const Footer = () => {
  return (
    <div className="footer">
      <div className="container">
        <div className="logo">
          <img src={Logo} alt="logo" />
        </div>
        <span>
          <span style={{ fontSize: "1.1em" }}>&#169;</span>
          2023 Baia Mare design with
          <span style={{ color: "red", fontSize: "1.3em" }}> &#9829; </span> by
          FB
        </span>
        <div className="social-media-icons">
          <a
            href="https://www.linkedin.com/in/florinbuda77"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i>
              <FaLinkedin
                style={{
                  color: "var(--clr-zinc)",
                  width: "100%",
                  height: "100%",
                }}
              />
            </i>
          </a>
          <a
            href="https://github.com/Flor77"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i>
              <FaGithub
                style={{
                  color: "var(--clr-zinc)",
                  width: "100%",
                  height: "100%",
                }}
              />
            </i>
          </a>
          <a
            href="https://www.facebook.com/florin.buda.35"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i>
              <FaFacebook
                style={{
                  color: "var(--clr-zinc)",
                  width: "100%",
                  height: "100%",
                }}
              />
            </i>
          </a>
          <a
            href="https://twitter.com/Flor80387635"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i>
              <FaTwitter
                style={{
                  color: "var(--clr-zinc)",
                  width: "100%",
                  height: "100%",
                }}
              />
            </i>
          </a>
          <a
            href="https://www.youtube.com/channel/UCszMg5mhTGj1DU0J7vFhEOw"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i>
              <FaYoutube
                style={{
                  color: "var(--clr-zinc)",
                  width: "100%",
                  height: "100%",
                }}
              />
            </i>
          </a>
          <a
            href="https://www.discordapp.com/users/flor777"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i>
              <FaDiscord
                style={{
                  color: "var(--clr-zinc)",
                  width: "100%",
                  height: "100%",
                }}
              />
            </i>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
