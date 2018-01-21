import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class UserData extends Component {
    render() {
        console.log(this.props);

        if (!this.props.user.data) {
            return (
                <p><b>Recognition status</b> will be displayed here</p>
            );
        }

        if (this.props.user.data.Errors) {
            return (
                <p><b>Error: </b>No face found. Please place your face in the frame.</p>
            );
        }

        if (this.props.user.data.images['0'].transaction.status === 'failure') {
            return (
                <p>Recognition <b>failed</b><br/>Please register with us <Link to={'/register'}>here</Link></p>
            );
        }

        return (
            <div className='userData'>
                <p><b>Profile Name: </b>{this.props.user.data.images['0'].transaction.subject_id}</p>
                <p><b>Face ID: </b>{this.props.user.data.images['0'].transaction.face_id}</p>
            </div>
        );
    }
}

export default UserData;