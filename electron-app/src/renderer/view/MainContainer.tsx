import * as React from 'react';
// import ThemeProvider from 'react-toolbox/lib/ThemeProvider';
//
// const theme = require('../../resources/react-toolbox/theme');

export default class MainContainer extends React.Component<any, any> {

  render() {
    return (
      <div>
        {/*<ThemeProvider theme={theme}>*/}
        {this.props.children}
        {/*</ThemeProvider>*/}
      </div>
    );
  }
}
