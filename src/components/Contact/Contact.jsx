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
              <b>Email :</b> me@shreeshasagar.in
            </p>
          </div>
        </Fade>
      </Container>
    </section>
  );
};

export default Contact;
