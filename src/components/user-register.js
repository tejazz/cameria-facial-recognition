import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class UserRegister extends Component {
    render() {
        if (this.props.detect.message === 'error') {
            return (<p><b>Face not in the frame.</b> Please try again by occupying the frame.</p>);
        } else if (this.props.detect.message === 'failure') {
            return (<p><b>Registration failed</b><br />Please try again.</p>);
        } else if (this.props.detect.message === 'success') {
            return (
                <div>
                    <p>
                        User successfully <b>registered</b>
                        <br />
                        Go ahead and recognize yourself <Link to={'/recognize'}>here.</Link>
                    </p>
                </div>);
        } else {
            return <p><b>REGISTRATION STATUS</b> WILL APPEAR HERE. <br />Resetting the gallery would remove all the faces from the database. <b>Use it with caution.</b></p>
        }
    }
}

export default UserRegister;