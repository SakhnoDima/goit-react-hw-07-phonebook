import styled from 'styled-components';
import { AiOutlineContacts } from 'react-icons/ai';

export const TotalBox = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;
`;

export const Total = styled.p`
  color: var(--light-text);
`;

export const TotalIcon = styled(AiOutlineContacts)`
  fill: var(--button-border);
  width: 24px;
  height: 24px;
`;
