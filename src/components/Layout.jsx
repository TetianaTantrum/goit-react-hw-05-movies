import { NavLink, Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import styled from 'styled-components';
import { Header, List, Item } from './Layout.styled';
import { Button } from '../pages/Movies/Movies.styled';

const StyledLink = styled(NavLink)`
  text-decoration: none;
  display: inline-block;
  color: rgb(229, 229, 229);
  font-family: Verdana, Geneva, Tahoma, sans-serif;
  font-size: 14px;
  font-style: unset;
  opacity: 0.6;
  transition: opacity 250ms cubic-bezier(0.4, 0, 0.2, 1) 0s;
  cursor: pointer;
  &.active {
    color: #ffffff;
  }
  &:hover {
    opacity: 1;
  }
`;

export const Layout = () => {
  return (
    <>
      <Header>
        <List>
          <Item>
            <Button>
              <StyledLink to="/">Home</StyledLink>
            </Button>
          </Item>
          <Item>
            <Button>
              <StyledLink to="/movies">Search</StyledLink>
            </Button>
          </Item>
        </List>
      </Header>
      <main>
        <Suspense fallback={<div>Loading...</div>}>
          <Outlet />
        </Suspense>
      </main>
    </>
  );
};
