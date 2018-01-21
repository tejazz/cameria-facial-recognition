import React, { Component } from 'react';
import Webcam from 'react-webcam';
import UserConfirmData from './user-confirm';
import '../styles/register.css';
import { connect } from 'react-redux';
import { registerUser, initiateRegisterLoader, clearData } from '../actions';

// material-ui components
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import RefreshIndicator from 'material-ui/RefreshIndicator';

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

class Register extends Component {
    constructor(props) {
        super(props);

        this.state = {
            username: ''
        };
    }

    setRef(webcam) {
        this.webcam = webcam;
    }

    register() {
        const imageSrc = this.webcam.getScreenshot();
        this.props.initiateRegisterLoader();
        this.props.registerUser(imageSrc, this.state.username);
    };

    handleChange(event) {
        this.setState({
            username: event.target.value
        });
    }

    render() {
        console.log(this.props);
        return (
            <div style={{ 'textAlign': 'center' }}>
                <h3>REGISTER FACE</h3>
                <Webcam
                    audio={false}
                    height={320}
                    width={320}
                    ref={(e) => this.setRef(e)}
                    screenshotFormat="image/jpeg"
                />
                <br />
                <div style={{ 'margin': '0 auto!important' }}>
                    <TextField
                        style={{ 'position': 'absolute' }}
                        hintText="provide identification name"
                        floatingLabelText="Username"
                        onChange={(event) => this.handleChange(event)}
                        className='subject-id'
                    />
                </div>
                <br />
                <RefreshIndicator
                    className='css-loader'
                    size={80}
                    left={70}
                    top={0}
                    loadingColor="#ADD8E6"
                    status="loading"
                    style={(this.props.regData.fetching === false) ? style.hide : style.refresh}
                />
                <br />
                <RaisedButton className='register-button' onClick={() => this.register()} label="REGISTER" primary={true} style={{ 'margin': 16 }} />
                <UserConfirmData user={this.props.regData} />
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        regData: state.regData
    };
}

export default connect(mapStateToProps, { registerUser, initiateRegisterLoader, clearData })(Register);