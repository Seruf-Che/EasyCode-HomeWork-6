import React from "react";

export default class ErrorIndicator extends React.Component {
  
  state = {
    hasError: false,
  };

  componentDidCatch(error) {
    this.setState({
      hasError: true
    })
  }

  render() {
    const {hasError} = this.state;
    
    if (hasError) return <div className={"error"}>Something went wrong.... :(</div>;
    
    return this.props.children;
  }
}