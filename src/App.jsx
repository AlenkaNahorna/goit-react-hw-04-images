import React, { Component } from 'react';
import { Box } from 'styles/Box';
import { Searchbar } from 'components/Searchbar/Searchbar';

export class App extends Component {
  render() {
    return (
      <Box
        display="flex"
        flexDirection="column"
        alignItems="center"
        width="100%"
        height="100%"
      >
        <Searchbar onSubmit={console.log} />
      </Box>
    );
  }
}
