// gallery component for displaying the user gallery
import React, { Component } from 'react';
// import closeImg from '../assets/images/close.png';
import '../styles/register.css';
import { connect } from 'react-redux';
import { fetchGalleryData } from '../actions';

// material-ui components
import { Grid, Row, Col } from 'react-flexbox-grid';
import { Card } from 'material-ui/Card';

class Gallery extends Component {
    componentDidMount() {
        this.props.fetchGalleryData();
    }

    // renders the list of user obtained
    renderList(item) {
        return (
            <Col key={item} xs={12} md={12}>
                <Card className='gallery-card'>
                    <p className='gallery-data'><b>Subject ID: </b>{item}</p>
                </Card>
            </Col>
        );
    }

    render() {
        if (!this.props.gallery.gallery) {
            return <div>Loading gallery data...</div>;
        }

        return (
            <Grid fluid>
                <Row>
                    <Col xs={12} md={12} style={{ textAlign: 'center' }}>
                        <h3>House of Black and White</h3>
                    </Col>
                </Row>
                <Row>
                    {
                        (this.props.gallery.gallery.length === 0) ?
                            <p>No users registered</p> :
                            (this.props.gallery.gallery.map((item) => this.renderList(item)))
                    }
                </Row>
            </Grid>
        );
    }
}

function mapStateToProps(state) {
    return {
        galleryData: state.galleryData
    }
}

export default connect(mapStateToProps, { fetchGalleryData })(Gallery);