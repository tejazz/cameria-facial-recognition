import React, { Component } from 'react';
import Webcam from 'react-webcam';
import '../styles/register.css';

// material-ui component
import RaisedButton from 'material-ui/RaisedButton';
import RefreshIndicator from 'material-ui/RefreshIndicator';

import axios from 'axios';

import { connect } from 'react-redux';
import { recognizeUser } from '../actions';

import UserRecognize from './user-recognize';

// loader styling
const style = {
    container: {
        position: 'absolute',
    },
    refresh: {
        display: 'inline-block',
        position: 'absolute',
    },
    hide: {
        display: 'none',
        position: 'absolute',
    },
};

class Recognize extends Component {
    constructor(props) {
        super(props);

        this.state = {
            load: false
        };
    }
    setRef = (webcam) => {
        this.webcam = webcam;
    }

    capture = () => {
        this.setState({
            load: true
        });

        const imageSrc = this.webcam.getScreenshot();
        // console.log(imageSrc);
        axios.post(`https://api.kairos.com/recognize`, {
            gallery_name: 'newCameriaGallery',
            image: imageSrc
        }, {
                headers: {
                    app_id: '18cac37a',
                    app_key: '600e696b44be685585afc44e0b9b144e'
                }
            }).then((response) => {
                console.log('response', response);
                this.props.recognizeUser(response.data);
                this.setState({
                    load: false
                });
            }).catch((error) => {
                console.log(error);
            });
    };

    render() {
        return (
            <div style={{ 'textAlign': 'center' }}>
                <h3>DETECT FACE</h3>
                <Webcam
                    audio={false}
                    height={320}
                    ref={this.setRef}
                    screenshotFormat="image/png"
                    width={320}
                />
                <RefreshIndicator
                    className='css-loader'
                    size={80}
                    left={70}
                    top={0}
                    loadingColor="#ADD8E6"
                    status="loading"
                    style={(this.state.load === false) ? style.hide : style.refresh}
                />
                <br />
                <RaisedButton onClick={this.capture} label="DETECT" primary={true} style={{ 'margin': 16 }} />
                <UserRecognize detect={this.props.detData} />
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        detData: state.detData
    }
}

export default connect(mapStateToProps, { recognizeUser })(Recognize);