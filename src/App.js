import './App.css';
import React,{Component} from "react";
import UserList from "./components/UsuarioLista.js";

class App extends Component {
    state = {
        usersList: []
    };
    componentDidMount() {
        fetch('https://taskplannermanuel.azurewebsites.net/users')
            .then(response => response.json())
            .then(data => {
                let userList = [];
                data.forEach(function (user) {
                    userList.push(user)
                });
                this.setState({usersList: userList});
            });
    }
    render() {
        return (
            <div>
                <UserList usersList={this.state.usersList}/>
            </div>
        );
    }
}
export default App;
