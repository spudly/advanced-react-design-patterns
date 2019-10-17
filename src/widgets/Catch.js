import React from 'react';

class Catch extends React.Component {
  state = {error: null};

  static getDerivedStateFromError(error) {
    return {error};
  }

  render() {
    const {
      props: {children},
      state: {error},
    } = this;
    return error ? <pre>{error.stack}</pre> : children;
  }
}

export default Catch;
