import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
 <Section row nopadding>
  <LeftSection>
    <SectionTitle main center>
      Hello! <br />
      My name is Collyn.
    </SectionTitle>
    <SectionText>
      I am a Michigan based Frontend Developer looking to make the world a better place one application at a time.
    </SectionText>
    <Button onClick={() => window.location = 'https://google.com'}>Learn More</Button>
  </LeftSection>
 </Section>
);

export default Hero;