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
  width: ${breakpoints.desktop};
  padding: ${space(8)} ${space(2)} ${space(4)};
`;

const SectionContainer = styled.div`
  display: flex;
  flex-direction: row
  ${media.lessThan('tablet')`
     flex-direction: column-reverse
  `}
`;

const Info = styled.div`
  width: 50%
  ${media.lessThan('desktop')`
    width: 100%
  `}
`;

const Image = styled.img`
  width: 50%
  ${media.lessThan('desktop')`
    width: 100%
  `}
`;

const Header = styled.h2`
  margin: 0;
  font-weight: bold;
  font-size: 59px;
  line-height: 71px;
  color: ${colors.oceanBlue};
`;

const Paragraph = styled.p`
  font-size: 25px;
  line-height: 35px;
  color: ${colors.oceanBlue};
`;

const SECTION_INFO = [
  {
    id: '#team',
    header: 'Get to know us better.',
    info: 'We are a teams of friends who combines passion for their work. Each of us is unique and has different experience.',
    link: '/asd',
    image: teamImage
  },
  {
    id: '#project',
    header: 'See our projects.',
    info: 'We create with passion, we approach each project creatively. We focus on making a  functional and looking good product.',
    link: '/asd',
    image: projectsImage
  },
  {
    id: '#blog',
    header: `We're writing a blog!`,
    info: 'We have a blog where you can read about the curiosities from our industry and you will learn a bit more about what we do!',
    link: '/asd',
    image: blogImage
  }
]

export default () => (
  <MainContainer>
    {SECTION_INFO.map((section, i) =>
      <SectionContainer id={section.id}>
        <Info>
          <Header>{section.header}</Header>
          <Paragraph>{section.info}</Paragraph>
          <ButtonPrimary as='a' href={section.link}>
            Read more
          </ButtonPrimary>
        </Info>
        <Image src={section.image} />
      </SectionContainer>
    )}
  </MainContainer>
);
