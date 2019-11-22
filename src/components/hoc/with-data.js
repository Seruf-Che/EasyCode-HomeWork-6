import React from "react";

import Spinner from "../spinner/spinner"

export const withData = (Wrapped, getData) => {
  return class extends React.Component {
    
    state = {
      data: false
    }

    componentDidMount() {
      this.getData();
    }

    getData = () => {
      getData()
        .then(data => this.setState({data}))
    }
    
    render() {
      const {data} = this.state;
      
      if (!data) return <Spinner />
      
      return <Wrapped data={data}/>
    }
  }
}