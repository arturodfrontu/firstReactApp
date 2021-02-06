import React from 'react';
import Container from '../Container/Container.js';
import Hero from '../Hero/Hero.js';
import { faq } from '../../data/dataStore.js';

const Faq = () => (

  <Container>
    <Hero titleText={faq.title} image={faq.image} />
    <h3>{faq.question1}</h3>
    <p>{faq.answer1}</p>
    <h3>{faq.question2}</h3>
    <p>{faq.answer2}</p>
    <h3>{faq.question3}</h3>
    <p>{faq.answer3}</p>
    <h3>{faq.question4}</h3>
    <p>{faq.answer4}</p>
  </Container>
);

export default Faq;