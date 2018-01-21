import React, { Component } from 'react';

class UserConfirmData extends Component {
    render() {
        console.log(this.props);

        if (!this.props.user.data) {
            return (
                <p>Register your face with us</p>
            );
        }

        return (
            <div className='userData'>
                <p>User successfully registered</p>
            </div>
        );
    }
}

export default UserConfirmData;