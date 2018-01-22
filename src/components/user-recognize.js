import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class UserRecognize extends Component {
    render() {
        if (this.props.detect.message === 'error') {
            return (<p>Face not in the frame. Please try again by occupying the frame.</p>);
        } else if (this.props.detect.message === 'failure') {
            return (<p>Face not in gallery. Please register with us <Link to={'/register'}>here</Link></p>);
        } else if (this.props.detect.message === 'success') {
            return (
                <div>
                    <p><b>Profile name: </b>{this.props.detect.name}</p>
                    <p><b>Face ID: </b>{this.props.detect.faceID}</p>
                </div>);
        } else {
            return <p><b>Recognition status</b> will appear here</p>
        }
    }
}

export default UserRecognize;