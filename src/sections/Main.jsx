import React from "react";
import styled from "styled-components";
import colors from "../styles/colors";
import { breakpoints } from "../styles/variables";
import { space, media } from "../styles/helpers";
import { ButtonPrimary } from "../components/Button";
import teamImage from "../assets/Team.svg";
import projectsImage from "../assets/Projects.svg";
import blogImage from "../assets/Blog.svg"

const MainContainer = styled.section`
  ${media.greaterThan('desktop')`
    max-width: ${breakpoints.desktop}px;
  `}
  ${media.between('tablet', 'desktop')`
    max-width: ${breakpoints.desktop}px;
  `}
  ${media.between('mobile', 'tablet')`
    max-width: ${breakpoints.tablet}px;
  `}
  ${media.lessThan('mobile')`
    max-width: ${breakpoints.mobile}px;
  `}
  margin: auto
  padding: ${space(8)} ${space(2)} ${space(4)};
`;

const SectionContainer = styled.div`
  display: flex;
  flex-direction: row;
  margin-bottom: 6rem;
  &:nth-of-type(2) {
    flex-direction: row-reverse;
  }
  ${media.lessThan('tablet')`
     flex-direction: column-reverse;
     &:nth-of-type(2) {
      flex-direction: column-reverse;
    }
  `}
}
`;

const Info = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  width: 50%
  ${media.lessThan('tablet')`
    width: 100%
    justify-content: left;
  `}
`;

const Image = styled.img`
  width: 50%
  padding: 0 20px;
  ${media.lessThan('tablet')`
    width: 100%
    padding: 0 10px;
  `}
`;

const Header = styled.h2`
  margin: 0;
  font-weight: bold;
  font-size: 30px;
  line-height: 36px;
  text-align: center;
  color: ${colors.oceanBlue};
  ${media.greaterThan('tablet')`
    font-size: 59px;
    line-height: 71px;
    text-align: left;
  `}
`;

const Paragraph = styled.p`
  font-size: 17px;
  line-height: 23px;
  text-align: center;
  color: ${colors.oceanBlue};
  ${media.greaterThan('tablet')`
    font-size: 25px;
    line-height: 35px;
    text-align: left;
  `}
`;

const SECTION_INFO = [
  {
    id: 'team',
    header: 'Get to know us better.',
    info: 'We are a teams of friends who combines passion for their work. Each of us is unique and has different experience.',
    link: 'https://www.facebook.com/applantic/',
    image: teamImage
  },
  {
    id: 'projects',
    header: 'See our projects.',
    info: 'We create with passion, we approach each project creatively. We focus on making a functional and looking good product.',
    link: 'https://www.behance.net/MateuszKarski',
    image: projectsImage
  },
  {
    id: 'blog',
    header: `We're writing a blog!`,
    info: 'We have a blog where you can read about the curiosities from our industry and you will learn a bit more about what we do!',
    link: 'https://medium.com/applantic',
    image: blogImage
  }
]

export default () => (
  <MainContainer>
    {SECTION_INFO.map((section, i) =>
      <SectionContainer id={section.id} key={i}>
        <Info>
          <Header>{section.header}</Header>
          <Paragraph>{section.info}</Paragraph>
          <ButtonPrimary as='a' href={section.link} target='_blank'>
            Read more
          </ButtonPrimary>
        </Info>
        <Image src={section.image} />
      </SectionContainer>
    )}
  </MainContainer>
);
