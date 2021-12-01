import React from 'react'
import axios from 'axios'
import { AboutColumn, AboutRow, Img, ImgWrapper } from '../AboutSection/AboutElements'
import { Form } from '../Footer/FooterElements'
import {
    NewsletterBox,
    NewsletterSec,
    NewsletterText,
    NewsletterWrapper,
    SearchBar,
    TextWrapper,
    TitleWrapper,
    EmailButton
} from './NewsletterElements'
import img from '.../../../public/blogs.svg'
import { Title } from '../../globalStyles'
import newsletter from '.../../../public/Newsletter.svg'
function Newsletter() {
 
    return (
        <NewsletterSec>
            <AboutRow >
                <AboutColumn>
                    <NewsletterWrapper>
                        <Title>
                            Get all the latest news and articles
                        </Title>
                        <NewsletterBox>
                            <TitleWrapper>
                                <img src={newsletter} alt='Coursenator Newsletter' />
                            </TitleWrapper>
                            <TextWrapper>
                                <NewsletterText>
                                    Subscribe to our Coursenator NewsLetter for the latest updates on Online Education news and articles
                                </NewsletterText>
                            </TextWrapper>
                            <Form>
                                <SearchBar placeholder="Enter your email and recieve our newsletter" />
                            </Form>
                            <EmailButton >Sign up for free</EmailButton>
                        </NewsletterBox>
                    </NewsletterWrapper>
                </AboutColumn>
                <AboutColumn>
                    <ImgWrapper>
                        <Img src={img} alt="Blogs" />
                    </ImgWrapper>
                </AboutColumn>
            </AboutRow>
        </NewsletterSec>
    )
}

export default Newsletter
