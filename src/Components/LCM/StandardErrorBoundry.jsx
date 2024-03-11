import React, { Component } from "react";
import ErrorPage from "./ErrorPage.jsx";

class StandardErrorBoundry extends Component {
  constructor() {
    super();
    this.state = {
      hasError: false,
      error: undefined,
    };
  }

  static getDerivedStateFromError(error) {
    return {
      hasError: true,
      error: error,
    };
  }

  componentDidCatch(error, errorInf) {
    console.log("error", error, errorInf);
  }
  render() {
    return (
      <div>{this.state.hasError ? <ErrorPage /> : this.props.children}</div>
    );
  }
}

export default StandardErrorBoundry;
