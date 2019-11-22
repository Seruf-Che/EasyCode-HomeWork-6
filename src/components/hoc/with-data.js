import React from "react";

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
      
      return <Wrapped data={data}/>
    }
  }
}