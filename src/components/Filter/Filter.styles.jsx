import styled from 'styled-components';

export const Title = styled.h3`
  text-align: center;
  margin-top: ${({ theme }) => theme.spacing(4)};
  color: var(--light-text);
`;
export const Label = styled.label`
  margin: 0 auto;
  display: block;
  width: 200px;
  margin-top: 4px;
`;

export const Input = styled.input`
  outline: 0;
  cursor: pointer;
  border: 1px solid var(--button-border);
  width: 200px;
  padding: 10px;
  margin: 0 auto;
  border-radius: ${({ theme }) => theme.spacing(1)};
  background-color: var(--dark-background);
  color: var(--light-text);

  &:focus {
    border: 1px solid ${({ theme }) => theme.colors.accent};
  }
`;
