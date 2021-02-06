import React from 'react';
import Container from '../Container/Container.js';
import Hero from '../Hero/Hero.js';
import { info } from '../../data/dataStore.js';

const Info = () => (
  <Container>
    <Hero titleText={info.title} image={info.image} />
    <p>{info.description}</p>
  </Container>
);

export default Info;