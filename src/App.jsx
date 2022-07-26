import React, { useState, useEffect } from 'react';
import { Box } from 'styles/Box';
import { ToastContainer, toast } from 'react-toastify';
import { Searchbar } from 'components/Searchbar/Searchbar';
import { fetchImg } from './api/fetchImg';
import { ImageGallery } from 'components/ImageGallery/ImageGallery';
import { Loader } from 'components/Loader/Loader';
import { UncorrectSearch } from 'components/UncorrectSearch/UncorrectSearch';
import { Button } from 'components/Button/Button';

export function App() {
  const [q, setQ] = useState('');
  const [hits, setHits] = useState([]);
  const [totalHits, setTotalHits] = useState(null);
  const [status, setStatus] = useState('idle');
  const [lastPage, setLastPage] = useState(null);
  const [page, setPage] = useState(1);

  useEffect(() => {
    async function onFetch() {
      try {
        const {
          data: { hits, totalHits },
        } = await fetchImg({ page, q });

        if (q === '') {
          return;
        }

        if (page >= 1) {
          setHits(prevHits => (page === 1 ? hits : [...prevHits, ...hits]));
          setTotalHits(totalHits);
          setLastPage(Math.ceil(totalHits / 12));
          setStatus('resolved');
          console.log(hits);
        }
      } catch (error) {
        setTotalHits(null);
        setHits([]);
        setStatus('rejected');
        toast.info(`Something went wrong ${error}`);
      }
    }
    onFetch();
  }, [page, q]);

  const handlerSearchbarSubmit = async value => {
    setStatus('loading');
    setQ(value);
    setPage(1);
    try {
      const responce = await fetchImg({ q, page });
      console.log(responce);
      setLastPage(Math.ceil(responce.data.totalHits / 12));
      setHits([...responce.data.hits]);
      setTotalHits(responce.data.totalHits);
      setStatus('resolved');
    } catch (error) {
      toast.error(`Something went wrong ${error}`);
    }
  };

  const handlerLoadClick = () => {
    setPage(page + 1);
  };

  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      width="100%"
      height="100%"
    >
      <Searchbar onSubmit={handlerSearchbarSubmit} />
      {status === 'resolved' && totalHits === 0 && <UncorrectSearch />}
      {totalHits > 0 && <ImageGallery items={hits} />}
      {status === 'loading' && <Loader />}
      {totalHits > 12 && page !== lastPage && (
        <Button type="button" onClick={handlerLoadClick}>
          Load more
        </Button>
      )}

      <ToastContainer
        position="top-center"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </Box>
  );
}
