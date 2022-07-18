import {
  UncorrectSearchSection,
  UncorrectSearchText,
  UncorrectSearchIcon,
} from './UncorrectSearch.styled';

export const UncorrectSearch = () => {
  return (
    <UncorrectSearchSection>
      <UncorrectSearchIcon />
      <UncorrectSearchText>
        Sorry, image did not find, try again
      </UncorrectSearchText>
    </UncorrectSearchSection>
  );
};
