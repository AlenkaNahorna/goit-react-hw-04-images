import { Formik } from 'formik';
import {
  Header,
  SearchForm,
  SearchFormButton,
  SearchFormInput,
} from './Searchbar.styled';
import { ImSearch } from 'react-icons/im';

export const Searchbar = () => {
  return (
    <Formik initialValues={{ query: '' }} onSubmit={val => console.log(val)}>
      <Header>
        <SearchForm>
          <SearchFormButton type="submit">
            <ImSearch size="20px" />
          </SearchFormButton>

          <SearchFormInput
            type="text"
            // onChange={props.handleChange}
            // value={props.values.query}
            autoFocus
            placeholder="Search images and photos"
          />
        </SearchForm>
      </Header>
    </Formik>
  );
};
