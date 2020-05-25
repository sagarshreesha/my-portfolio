import React from 'react';
import Fade from 'react-reveal/Fade';
import { Container } from 'react-bootstrap';
import Title from '../Title/Title';

const Contact = () => {
  return (
    <section id="contact">
      <Container>
        <Title title="Contact" />
        <Fade bottom duration={1000} delay={800} distance="30px">
          <div className="contact-wrapper">
            <p className="contact-wrapper__text mx-auto" style={{ lineHeight: '5rem' }}>
              <b>Phone Number :</b> +91 8762948986
              <br />
              <b>Email :</b> shreeshasagar.is17@rvce.edu.in
            </p>
            <p className="contact-wrapper__text mx-auto">
              <b>Address :</b>
              {'  '}
              New Cauvery Hostel, RV College of Engineering, Mailasandra, Mysore Road, Bangalore
              560059
            </p>
          </div>
        </Fade>
      </Container>
    </section>
  );
};

export default Contact;
