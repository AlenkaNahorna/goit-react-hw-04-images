import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';
import { TailSpin } from 'react-loader-spinner';
import { LoaderSection } from './Loader.styled';

export const Loader = () => {
  return (
    <LoaderSection>
      <TailSpin height="100" width="100" color="#3f51b5" ariaLabel="loading" />
    </LoaderSection>
  );
};
