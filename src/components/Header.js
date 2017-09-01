import React from 'react';

export default class Header extends React.Component{

  constructor(props){
    super(props);
  }

  render(){
    return (<div style={styles.layout} >
      <h1  {...this.props}/>
      </div>
    );
  }

}

const styles = {
layout:{
  'background-color': '#F1FAEE'
}

};
