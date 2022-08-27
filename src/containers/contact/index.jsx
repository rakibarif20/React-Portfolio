import React from "react";
import PageHeaderContent from "../../components/pageHeaderContent";
import { RiContactsFill } from "react-icons/ri";
import "./style.scss";

const Contact = () => {
  return (
    <section className="contact" id="contact">
      <PageHeaderContent headerText="Contact Me" icon={<RiContactsFill size={35} />} />
      <div className="contact__content">
        <h3 className="contact__content__header-text">Let's Talk</h3>
        <div className="contact__content__form">
          <div className="contact__content__form__controlWrapper">
            <div className="nameWrapper">
              <input type="text" name="name" className="inputName" />
              <label htmlFor="name" className="nameLabel">
                Name
              </label>
            </div>
            <div className="emailWrapper">
              <input type="email" name="email" className="inputEmail" />
              <label htmlFor="email" className="emailLabel">
                Email
              </label>
            </div>
            <div className="descriptionWrapper">
              <textarea
                name="description"
                className="inputDescription"
                type="text"
                rows={5}
                style={{ resize: "none" }}
              ></textarea>
              <label htmlFor="name" className="descriptionLabel">
                Description
              </label>
            </div>
          </div>
          <div className="contact__btnArea">
            <button className="contact__btnArea__btn">Submit</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
