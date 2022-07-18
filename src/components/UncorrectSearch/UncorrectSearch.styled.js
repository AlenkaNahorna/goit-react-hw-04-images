import styled from '@emotion/styled';
import { FaRegSadCry } from 'react-icons/fa';

export const UncorrectSearchSection = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  color: ${p => p.theme.colors.secondaryTextColor};
`;

export const UncorrectSearchText = styled.p`
  text-align: center;
  font-size: ${p => p.theme.fontSizes.xl};
`;

export const UncorrectSearchIcon = styled(FaRegSadCry)`
  width: 50px;
  height: 50px;
  margin: 10px 0;
`;
