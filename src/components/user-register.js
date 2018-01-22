import React, { Component } from 'react';

class UserRegister extends Component {
    render() {
        if (this.props.detect.message === 'error') {
            return (<p>Face not in the frame. Try again.</p>);
        } else if (this.props.detect.message === 'failure') {
            return (<p>Registration failed. Please try again.</p>);
        } else if (this.props.detect.message === 'success') {
            return (
                <div>
                    <p>User successfully registered</p>
                </div>);
        } else {
            return <p>Registration status will appear here</p>
        }
    }
}

export default UserRegister;