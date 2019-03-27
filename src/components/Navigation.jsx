import React from "react";
import styled from "styled-components";

const NavigationContainer = styled.ul`
  display: flex;
  list-style: none;
  color: ${({ theme }) => theme.colors.white};
`;

const NavigationElement = styled.li`
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
    <nav>
      <NavigationContainer>
        {MENU_ELEMNTS.map((el, i) =>
          <NavigationElement key={i}>
            <a href={el.link}>
              {el.name}
            </a>
          </NavigationElement>
        )}
      </NavigationContainer>
    </nav>
  )
};

export default Navigation;
