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
    const { children } = this.props; // eslint-disable-line
    return (
      <MyContext.Provider
        value={{
          sidebarOpen,
          toggleSidebar: () => {
            this.setState({ sidebarOpen: !sidebarOpen });
          },
          logout: (e) => {
            e.preventDefault();
            localStorage.clear();
            window.location.reload();
          },
        }}
      >
        {children}
      </MyContext.Provider>
    );
  }
}


export default ContextProvider;
