import React, { Component, createContext } from "react";

export const AuthContext = createContext();

class AuthContextProvider extends Component {
  state = {
    isAuhtenticated: true
  };
  toggleAuth = () => {
    this.setState({ isAuhtenticated: !this.state.isAuhtenticated });
  };
  render() {
    return (
      <AuthContext.Provider
        value={{ ...this.state, toggleAuth: this.toggleAuth }}
      >
        {this.props.children}
      </AuthContext.Provider>
    );
  }
}
export default AuthContextProvider;
