import styled from '@emotion/styled';

export const Button = styled.button`
  display: block;
  min-width: 180px;
  margin: 0 auto;
  padding: 8px 16px;
  text-align: center;
  text-transform: uppercase;
  font-family: inherit;
  font-weight: 500;
  font-size: ${p => p.theme.fontSizes.m};
  line-height: 24px;
  margin-bottom: ${p => p.theme.space.l};
  border: 0;
  border-radius: ${p => p.theme.radii.small};
  background-color: ${p => p.theme.colors.secondaryColorBlue};
  color: ${p => p.theme.colors.secondaryColor};
  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);
  box-shadow: 0px 3px 1px -2px rgba(0, 0, 0, 0.2),
    0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12);
  cursor: pointer;
  :hover,
  :focus {
    background-color: #303f9f;
  }
`;
