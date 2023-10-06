import { useNav } from "../hooks/useNav";
import { AiOutlineMail } from "react-icons/ai";

const Contact = () => {
  const refContact = useNav("Contact");
  const email = "budaflorin@yahoo.com";
  const subject = "Contact Inquiry";
  const emailLink = `mailto:${email}?subject=${encodeURIComponent(subject)}`;
  return (
    <section ref={refContact} id="contactSection">
      <div className="contact">
        <div className="text">
          <h2>Contact</h2>
          <div className="wrapper">
            <p>
              Poti completa formularul daca ai ceva sa-mi spui.
              <a href={emailLink}>
                <i>
                  <AiOutlineMail />
                </i>
              </a>
            </p>
          </div>
        </div>
        <form
          method="POST"
          action="https://getform.io/f/e44f1fdf-1e25-4c28-a207-7b99a7f354b7"
        >
          <input type="text" placeholder="Name" name="name" />
          <input type="email" placeholder="Email" name="email" />
          <textarea
            name="message"
            id=""
            rows="10"
            placeholder="Message"
          ></textarea>
          <button>Trimite</button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
