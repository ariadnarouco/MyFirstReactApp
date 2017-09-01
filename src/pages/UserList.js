import React from 'react';
import User from './User';
import { Link } from 'react-router-dom';


export default class UserList extends React.Component {

    constructor(){
        super();
        //Hay que inicializar el estado en el constructor
        this.state = {
            users: []
        }
    }

    componentWillMount(){
        fetch('http://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(users => {
                this.setState({users: users})
            })
    }


    render(){
        return (
            <div>
                  <Link to="./userNew">Create new user</Link>

                {

                    this.state.users.length ?
                    this.state.users.map((p, index) => {
                        return (
                            <User
                              key={index}
                             name={p.name}
                             username={p.username}
                             emails={p.email}
                             />
                        )
                    })
                        :
                        'Cargando.......!!!'
                }
            </div>
        )
    }
}
