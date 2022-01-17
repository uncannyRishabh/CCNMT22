import React from 'react'
import {CardContainer, Title, Description, LearnMore, Image } from './CardElements'

export default function Card({ image, title, subtitle }) {
  const props = {
    height:'240px',
    padding:'10px',
    paddingLeft:'20px'
  }

  return (
      <CardContainer>
            <Image src={image} alt='none' style={{width:340, height:210}}/> 
            <div style={props}>
              <Title>{title}</Title>
              <Description>FloQast's Take Control conference website revamps its well-recognized green and navy blue colors in a unique color scheme, using brighter and more analogous colors. It also has two clear CTA buttons above-the-fold encouraging visitors to watch the event on demand.It also has two clear CTA buttons above-the-fold encouraging visitors to watch the event on demand.
              </Description>
              <LearnMore>{subtitle}</LearnMore>
            </div>
      </CardContainer>
    );
  }