import React, { Component } from 'react';
import { Box } from 'styles/Box';
import { ToastContainer, toast } from 'react-toastify';
import { Searchbar } from 'components/Searchbar/Searchbar';
import { fetchImg } from './api/fetchImg';
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

  async componentDidUpdate(_, prevState) {
    const { page, q } = this.state;
    if (page !== 1 && prevState.page !== page) {
      this.setState({
        status: 'loading',
      });
      try {
        const {
          data: { hits },
        } = await fetchImg({ page, q });
        if (page >= 1) {
          this.setState(prevState => ({
            hits: [...prevState.hits, ...hits],
            status: 'resolved',
          }));
        }
      } catch (error) {
        this.setState({
          totalHits: null,
          hits: [],
          status: 'rejected',
          error,
        });
        toast.info(`Something went wrong ${error}`);
      }
    }
  }

  handlerSearchbarSubmit = async value => {
    this.setState({
      status: 'loading',
      q: value,
      page: 1,
    });

    try {
      const responce = await fetchImg({ q: value, page: 1 });
      this.setState({
        lastPage: Math.ceil(responce.data.totalHits / 12),
        hits: [...responce.data.hits],
        totalHits: responce.data.totalHits,
        status: 'resolved',
      });
    } catch (e) {
      toast.error(e);
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
