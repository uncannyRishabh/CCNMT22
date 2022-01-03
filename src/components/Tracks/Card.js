import React from 'react'
import {CardContainer, Title, Subtitle } from './CardElements'

export default function Card({ image, title, subtitle }) {
    return (
      <CardContainer>
            <img src={image} alt='none' height={'280px'} width={'330px'} />
            <Title>{title}</Title>
            <Subtitle>{subtitle}</Subtitle>
      </CardContainer>
    );
  }