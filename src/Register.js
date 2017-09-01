import React from 'react';

export default class Register extends React.Component{


  constructor(props){
    super(props);
    if(props.user){
        this.state=props.name;
    }else{
      this.state={
        name :'name'
      };
    }
  }

  render(){
    return <div>
      <label>Usuario</label>
      <br/>
      <label>Nombre</label>
      <input type="text" onChange={(e) => this.handleChange(e, 'name')} value={this.state.name} />
      <br/>
      <label>Apellido</label>
      <input type="text" />
      <br/>
      <select>
        <option value="hombre">Hombre</option>
        <option value="mujer">Mujer</option>
        <option value="otros">Otros</option>
      </select>
    </div>;
  }


  handleChange(event, field){
    console.log(event.target);
  }
}
