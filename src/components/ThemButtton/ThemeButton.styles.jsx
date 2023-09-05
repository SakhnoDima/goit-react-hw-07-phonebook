import { styled } from 'styled-components';

export const Button = styled.div`
  position: relative;
  width: 40px;
  height: 24px;
  border-radius: 20px;
  background: ${props => (props.checked ? 'white' : 'black')};
  cursor: pointer;
  transition: all 300ms ease;

  input {
    position: absolute;
    width: 100%;
    height: 100%;
    opacity: 0;
    cursor: pointer;
    z-index: 999;
  }

  span {
    position: absolute;
    top: 2px;
    left: ${props => (props.checked ? '18px' : '2px')};
    background: ${props => (props.checked ? 'black' : 'white')};
    width: 20px;
    height: 20px;
    border-radius: 50%;
    transition: all 300ms ease;
  }
`;
