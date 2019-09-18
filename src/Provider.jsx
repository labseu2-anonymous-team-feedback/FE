import React from 'react';

export const MyContext = React.createContext();

class ContextProvider extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      sidebarOpen: false,
    };
  }

  render() {
    const { sidebarOpen } = this.state;
    return (
      <MyContext.Provider
        value={{
          sidebarOpen,
          toggleSidebar: () => {
            this.setState({ sidebarOpen: !sidebarOpen });
          },
        }}
      >
        {this.props.children}
      </MyContext.Provider>
    );
  }
}

export default ContextProvider;
