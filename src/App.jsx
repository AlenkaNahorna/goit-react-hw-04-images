import React, { Component } from 'react';
import { Box } from 'styles/Box';
import { ToastContainer, toast } from 'react-toastify';
import { Searchbar } from 'components/Searchbar/Searchbar';
import { fetchImg, fetchImgOptions } from './api/fetchImg';
import { ImageGallery } from 'components/ImageGallery/ImageGallery';
import { Loader } from 'components/Loader/Loader';
import { UncorrectSearch } from 'components/UncorrectSearch/UncorrectSearch';
import { Button } from 'components/Button/Button';

export class App extends Component {
  state = {
    q: '',
    hits: [],
    totalHits: null,
    status: 'idle',
    lastPage: null,
    page: 1,
  };

  componentDidUpdate(_, prevState) {
    const { page } = this.state;
    if (page !== 1 && prevState.page !== page) {
      this.setState({
        status: 'loading',
      });
      fetchImgOptions.page = page;
      fetchImg(fetchImgOptions).then(response => {
        this.setState(prevState => ({
          hits: [...prevState.hits, ...response.data.hits],
          status: 'resolved',
        }));
      });
    }
  }

  handlerSearchbarSubmit = value => {
    if (value.trim() === '') {
      toast.warn('Please, enter something!');
      return;
    } else {
      this.setState({
        status: 'loading',
        q: value,
        page: 1,
      });

      fetchImgOptions.q = value;
      fetchImg(fetchImgOptions).then(response => {
        this.setState({
          lastPage: Math.ceil(response.data.totalHits / 12),
          hits: [...response.data.hits],
          totalHits: response.data.totalHits,
          status: 'resolved',
        });
      });
    }
  };

  handlerLoadClick = () => {
    this.setState(prevState => ({
      page: prevState.page + 1,
    }));
  };

  render() {
    const { page, lastPage, hits, totalHits, status } = this.state;

    return (
      <Box
        display="flex"
        flexDirection="column"
        alignItems="center"
        width="100%"
        height="100%"
      >
        <Searchbar onSubmit={this.handlerSearchbarSubmit} />
        {status === 'resolved' && totalHits === 0 && <UncorrectSearch />}
        {totalHits > 0 && <ImageGallery items={hits} />}
        {status === 'loading' && <Loader />}
        {totalHits > 12 && page !== lastPage && (
          <Button type="button" onClick={this.handlerLoadClick}>
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
}
