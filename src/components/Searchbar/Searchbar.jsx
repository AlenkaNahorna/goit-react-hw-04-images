import PropTypes from 'prop-types';
import { Formik } from 'formik';
import {
  Header,
  SearchForm,
  SearchFormButton,
  SearchFormInput,
} from './Searchbar.styled';
import { ImSearch } from 'react-icons/im';

export const Searchbar = ({ onSubmit }) => {
  return (
    <Header>
      <Formik
        initialValues={{ query: '' }}
        onSubmit={values => {
          onSubmit(values.query);
        }}
      >
        {props => (
          <SearchForm>
            <SearchFormButton type="submit">
              <ImSearch size="20px" />
            </SearchFormButton>

            <SearchFormInput
              name="query"
              type="text"
              onChange={props.handleChange}
              value={props.values.query}
              autoFocus
              placeholder="Search images and photos"
            />
          </SearchForm>
        )}
      </Formik>
    </Header>
  );
};

Searchbar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
