import styled from 'styled-components';

export const Div = styled.div`
  background-color: var(--dark-background);
  color: var(--dark-text);
`;

export const List = styled.ul`
  margin: 16px auto;
  display: flex;
  justify-content: center;
  flex-direction: column;
  width: ${({ theme }) => theme.spacing(100)};
  padding: ${({ theme }) => theme.spacing(3)};
  border-radius: ${({ theme }) => theme.spacing(1)};
  background-color: var(--dark-background);
  color: var(--dark-text);
  box-shadow: ${({ theme }) => theme.shadows.regular};
  list-style: none;
`;

export const Error = styled.h2`
  margin-top: 16px;
  text-align: center;
  color: ${({ theme }) => theme.colors.error};
`;
