import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class UserRegister extends Component {
    render() {
        if (this.props.detect.message === 'error') {
            return (<p>Face not in the frame. Please try again by occupying the frame.</p>);
        } else if (this.props.detect.message === 'failure') {
            return (<p><b>Registration failed</b><br />Please try again.</p>);
        } else if (this.props.detect.message === 'success') {
            return (
                <div>
                    <p>
                        User successfully <b>registered</b>
                        <br />
                        Go ahead and recognize yourself <Link to={'/recognize'}>here.</Link>
                        <b> Some times your face may take a little longer to get registered in the backend. Do bear with us in such cases.</b>
                    </p>
                </div>);
        } else {
            return <p><b>Registration status</b> will appear here</p>
        }
    }
}

export default UserRegister;