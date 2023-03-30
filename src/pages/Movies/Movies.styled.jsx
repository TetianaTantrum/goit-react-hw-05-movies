import styled from 'styled-components';

export const Gallery = styled.ul`
  display: grid;
  max-width: calc(100vw - 48px);
  grid-template-columns: repeat(auto-fill, minmax(200px, 3fr));
  grid-gap: 16px;
  margin-top: 0;
  margin-bottom: 0;
  padding: 0;
  list-style: none;
  margin-left: auto;
  margin-right: auto;
`;
export const Item = styled.li`
  border-radius: 2px;
  box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.2),
    0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 2px 1px -1px rgba(0, 0, 0, 0.12);
`;

export const Image = styled.img`
  width: 100%;
  max-height: 400px;
  object-fit: contain;
  transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);
  &:hover {
    transform: scale(1.03);
    cursor: zoom-in;
  }
`;
export const Title = styled.h2`
  color: #363d43;
  margin-left: 15px;
  font-family: Tahoma, Geneva, Verdana, sans-serif;
  font-size: 16px;
  font-weight: 600;
  line-height: 1.5rem;
  letter-spacing: 0.02em;
`;

export const Text = styled.p`
  color: #363d43;
  margin-left: 15px;
  font-family: Tahoma, Geneva, Verdana, sans-serif;
  font-size: 14px;
  font-weight: 500;
  line-height: 1.2rem;
`;
export const Form = styled.form`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 20px;
  margin-bottom: 20px;
`;
export const Input = styled.input`
  display: inline-block;
  font-size: 20px;
  border: none;
  outline: none;
  padding-left: 7px;
  padding-right: 7px;
  width: 50%;
  height: 30px;
  border: 1px solid rgba(33, 33, 33, 0.2);
  border-radius: 4px;
  margin-right: 10px;
  font-family: Tahoma, Geneva, Verdana, sans-serif;
  font-size: 12px;
  line-height: 1.17;
  letter-spacing: 0.01em;
  transition: border-color 250ms cubic-bezier(0.4, 0, 0.2, 1);
  &:focus {
    outline: none;
    border-color: #074207;
  }
  &::placeholder {
    font: inherit;
    font-size: 18px;
    align-items: center;
  }
`;
export const Button = styled.button`
  display: inline-block;
  background-color: #051805;
  text-decoration: none;
  padding: 7px 20px;
  text-align: center;
  border-radius: 5px;
  margin-left: 15px;
  border: 0px;
  color: rgb(239, 239, 239);
  font-family: Verdana, Geneva, Tahoma, sans-serif;
  font-size: 14px;
  opacity: 0.6;
  transition: opacity 250ms cubic-bezier(0.4, 0, 0.2, 1) 0s;
  cursor: pointer;
  &:hover {
    opacity: 1;
  }
`;
