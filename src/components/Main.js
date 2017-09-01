import React from 'react';

export default class Header extends React.Component{

  constructor(props){
    super(props);
  }

  render(){
    return (<div style={styles.layout} >
      <div  {...this.props}/>
      </div>
    );
  }

}

const styles = {
layout:{
  'background-color': '#A8DADC',
  'color': 'white',
  'margin-left' : '20px',
  'margin-right' : '20px'
}

};
