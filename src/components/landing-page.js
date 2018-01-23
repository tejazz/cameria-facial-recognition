import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../styles/register.css';

// images being used
import detectImg from '../assets/images/detect-img.jpg';
import registerImg from '../assets/images/register-img.jpg';
import galleryImg from '../assets/images/gallery-img.jpg';

import { Grid, Row, Col } from 'react-flexbox-grid';

// material-ui components
import { Card, CardActions, CardMedia, CardTitle, CardText } from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';

class LandingPage extends Component {

    render() {
        return (
            <Grid fluid>
                <Row>
                    <Col xs={12} md={12} style={{ 'textAlign': 'center' }}>
                        <h1>YOUR FACE IS YOUR IDENTITY</h1>
                        <br />
                        <p>This application allows the user to capture an image and use facial recognition to recognize the face whose data has been captured</p>
                        <p><b>Register. Detect. Check.</b></p>
                        <br />
                    </Col>
                </Row>
                <Row>
                    <Col md={1}>
                    </Col>
                    <Col xs={12} md={3} style={{ 'textAlign': 'center' }}>

                        <Card>
                            <CardMedia
                            >
                                <img className='landingImage' src={detectImg} alt="detect" />
                            </CardMedia>
                            <CardTitle title="Recognize Face" />
                            <CardText>
                            </CardText>
                            <CardActions>
                                <Link to={'/recognize'}><FlatButton className='flat-btn' label="RECOGNIZE" /></Link>
                            </CardActions>
                        </Card>
                    </Col>
                    <Col xs={12} md={3} style={{ 'textAlign': 'center' }}>
                        <Card>
                            <CardMedia
                            >
                                <img className='landingImage' src={registerImg} alt="register" />
                            </CardMedia>
                            <CardTitle title="Register Face" />
                            <CardText>
                            </CardText>
                            <CardActions>
                                <Link to={'/register'}><FlatButton className='flat-btn' label="REGISTER" /></Link>
                            </CardActions>
                        </Card>
                    </Col>
                    <Col xs={12} md={3} style={{ 'textAlign': 'center' }}>
                        <Card>
                            <CardMedia
                            >
                                <img className='landingImage' src={galleryImg} alt="gallery-face" />
                            </CardMedia>
                            <CardTitle title="Face Gallery" />
                            <CardText>
                            </CardText>
                            <CardActions>
                                <FlatButton className='flat-btn' label="GALLERY" />
                            </CardActions>
                        </Card>
                    </Col>
                </Row>
            </Grid>
        );
    }
}

export default LandingPage;