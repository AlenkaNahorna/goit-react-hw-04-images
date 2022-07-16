import styled from '@emotion/styled';
import { Form, Field } from 'formik';

export const Header = styled.header`
  top: 0;
  left: 0;
  position: sticky;
  width: 100%;
  z-index: 1100;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 64px;
  padding: 12px 24px;
  color: ${p => p.theme.colors.secondaryColor};
  background-color: ${p => p.theme.colors.secondaryColorBlue};
  box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2),
    0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);
`;

export const SearchForm = styled(Form)`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  max-width: 500px;
  background-color: ${p => p.theme.colors.secondaryColor};
  border-radius: 3px;
  overflow: hidden;
`;

export const SearchFormInput = styled(Field)`
  display: inline-block;
  width: 100%;
  font: inherit;
  font-size: 20px;
  border: none;
  outline: none;
  padding-left: 4px;
  padding-right: 4px;
  ::placeholder {
    font: inherit;
    font-size: 14px;
  }
`;

export const SearchFormButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 9px;
  border: 0;
  color: ${p => p.theme.colors.primaryColor};
  transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1);
  cursor: pointer;
  outline: none;
  :hover {
    color: ${p => p.theme.colors.blue};
  }
`;
