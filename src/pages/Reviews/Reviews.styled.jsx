import styled from 'styled-components';

export const List = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 16px;
  list-style: none;
`;

export const Item = styled.li`
  display: flex;
  flex-direction: row;
  justify-content: left;
  gap: 16px;
`;
export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  justify-items: stretch;
  gap: 10px;
`;
export const Image = styled.img`
  width: 120px;
  object-fit: contain;
  transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);
  &:hover {
    transform: scale(1.03);
    cursor: zoom-in;
  }
`;
