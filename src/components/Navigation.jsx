import React from "react";
import styled from "styled-components";
import { media } from "../styles/helpers";

const NavigationContainer = styled.nav`
  ${media.lessThan('tablet')`
    display: none;
  `}
`;

const MenuContainer = styled.ul`
  display: flex;
  list-style: none;
  color: ${({ theme }) => theme.colors.white};
`;

const MenuElement = styled.li`
  color: ${({ theme }) => theme.colors.white};
  margin-right: 1rem;
`;

const MENU_ELEMNTS = [
  {
    link: '/',
    name: 'Home'
  },
  {
    link: '#team',
    name: 'Team'
  },
  {
    link: '#projects',
    name: 'Projects'
  },
  {
    link: '#blog',
    name: 'Blog'
  },
  {
    link: '#contact',
    name: 'Contact'
  }
]

const Navigation = () => {
  return (
    <NavigationContainer>
      <MenuContainer>
        {MENU_ELEMNTS.map((el, i) =>
          <MenuElement key={i}>
            <a href={el.link}>
              {el.name}
            </a>
          </MenuElement>
        )}
      </MenuContainer>
    </NavigationContainer>
  )
};

export default Navigation;
