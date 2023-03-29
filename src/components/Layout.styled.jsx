import styled from 'styled-components';

export const Header = styled.header`
  top: 0;
  left: 0;
  position: sticky;
  z-index: 1100;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 34px;
  padding-right: 24px;
  padding-left: 24px;
  color: #fff;
  background-color: #05683f;
  box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2),
    0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);
`;
export const List = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  font-size: 20px;
  font-weight: 400;
  line-height: 1.4;
`;

export const Item = styled.li`
  display: inline-block;
  padding: 7px 25px;
  border-radius: 5px;
  border: 0;
  transition: opacity 250ms cubic-bezier(0.4, 0, 0.2, 1);
  cursor: pointer;
  outline: none;
  &:hover {
    opacity: 1;
  }
`;
