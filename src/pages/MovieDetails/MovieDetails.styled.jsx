import styled from 'styled-components';
export const Section = styled.section`
  display: flex;
  padding-left: 15px;
  padding-right: 15px;
  flex-direction: column;
  margin-bottom: auto;
  gap: 20px;
  @media screen and (min-width: 450px) {
    flex-direction: row;
    justify-content: center;
    align-items: center;
    justify-items: stretch;
  }
`;
export const Image = styled.img`
  height: 400px;
  object-fit: contain;
  transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);
  &:hover {
    transform: scale(1.03);
    cursor: zoom-in;
  }
`;
export const Title = styled.h2`
  color: #363d43;
  font-family: Tahoma, Geneva, Verdana, sans-serif;
  font-size: 1rem;
  font-weight: 600;
  line-height: 1.5rem;
  letter-spacing: 0.02em;
`;
export const Text = styled.p`
  color: #363d43;
  font-family: Tahoma, Geneva, Verdana, sans-serif;
  font-size: 1rem;
  font-weight: 500;
  line-height: 1.2rem;
`;
export const Form = styled.form`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 20px;
`;

export const Button = styled.button`
  display: inline-block;
  background-color: #051805;
  text-decoration: none;
  padding: 7px 20px;
  margin-right: 15px;
  margin-top: 20px;
  margin-bottom: 20px;
  text-align: center;
  border-radius: 5px;
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
