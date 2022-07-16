import React, { Component } from 'react';
import { Box } from 'styles/Box';

export class App extends Component {
  render() {
    return (
      <Box
        display="flex"
        flexDirection="column"
        alignItems="center"
        p="ml"
        m="0px auto"
        backgroundColor="secondaryColorBlue"
        width="100%"
        height="100%"
      >
        <h1>Hello world</h1>
      </Box>
    );
  }
}
