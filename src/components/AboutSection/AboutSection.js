import React from 'react';
import { Link } from 'react-router-dom';
/* import { Container } from '../../globalStyles'; */
import {
  AboutSec,
  AboutRow,
  AboutColumn,
  TextWrapper,
  Text,
  ImgWrapper,
  Img,
  AboutSecButton
} from './AboutElements';
import img from '.../../../public/logos.svg'

function AboutSection() {
  return (
    <>
      <AboutSec>
        <>
          <AboutRow>
            <AboutColumn>
              <TextWrapper>
                <Text bold dropshadow>
                Coursenator aggregates courses from the best online learning platforms including edX, Coursera, Udemy, NPTEL and over 15 others.
                </Text>
                <Text black>
                Browse from thousands of indexed courses from the best providers. All in one catalogue. Search by popularity, reviews, languages, teacher, pricing, and start date. See our list of curated courses handpicked by our team of MOOC enthusiasts.
                </Text>
                <Link to='/catalog'>
                  <AboutSecButton blue big >
                    Explore Catalogue
                  </AboutSecButton>
                </Link>
                <Link to='/blogs'>
                  <AboutSecButton blue bigger >
                    Read Blog
                  </AboutSecButton>
                </Link>
              </TextWrapper>
            </AboutColumn>
            <AboutColumn>
              <ImgWrapper start>
                <Img src={img} alt='Websites' />
              </ImgWrapper>
            </AboutColumn>
          </AboutRow>
        </>
      </AboutSec>
    </>
  );
}

export default AboutSection;