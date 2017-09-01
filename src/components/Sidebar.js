import React from 'react';

export default class Sidebar extends React.Component{

  constructor(props){
    super(props);
  }

  render(){
    return (<div className='my-class' >
      <div  {...this.props}/>
      </div>
    );
  }

}
