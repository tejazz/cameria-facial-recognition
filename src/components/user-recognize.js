import React, { Component } from 'react';

class UserRecognize extends Component {
    render() {
        if (this.props.detect.message === 'error') {
            return (<p>Face not in the frame. Try again.</p>);
        } else if (this.props.detect.message === 'failure') {
            return (<p>Face not in gallery. Please register.</p>);
        } else if (this.props.detect.message === 'success') {
            return (
                <div>
                    <p><b>Profile name: </b>{this.props.detect.name}</p>
                    <p><b>Face ID: </b>{this.props.detect.faceID}</p>
                </div>);
        } else {
            return <p>Recognition status will appear here</p>
        }
    }
}

export default UserRecognize;