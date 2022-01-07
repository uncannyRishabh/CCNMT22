import React from 'react'
import {CardContainer, Title, Subtitle, Image } from './CardElements'

export default function Card({ image, title, subtitle }) {
    return (
      <CardContainer>
            <Image src={image} alt='none' style={{width:330, height:280}}/> 
            <Title>{title}</Title>
            <Subtitle>{subtitle}</Subtitle>
      </CardContainer>
    );
  }