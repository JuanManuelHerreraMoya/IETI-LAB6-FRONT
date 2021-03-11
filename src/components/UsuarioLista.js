import React from 'react'

class UserList extends React.Component{
    render(){
        const {usersList} = this.props;
        const value = usersList.map((user)=>{
            return(
                <div key={user.username} align="center" >

                    <h4>Username: {user.username}</h4>
                    <h4>Password: {user.password}</h4>
                    <h4>Email: {user.email}</h4>
                    <br/>
                </div>)});
            return(
                <div>
                    {value}
                </div>
            )
    }
};
export default UserList;