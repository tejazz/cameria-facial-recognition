import React, { Component } from 'react';
import './App.css';

import { connect } from 'react-redux';
import { fetchGalleryData } from './actions';

// material-ui components
import AppBar from 'material-ui/AppBar';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';

// components to be used
import Register from './components/register';
import Capture from './components/capture';
import LandingPage from './components/landing-page';
import Gallery from './components/gallery';

import { Route, Switch, Link } from 'react-router-dom';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      toggle: false
    };
  }

  componentDidMount() {
  }

  toggleDrawerMenu() {
    this.setState({
      toggle: !this.state.toggle
    });
  }

  handleClose() {
    this.setState({
      toggle: false
    });
  }

  render() {
    return (
      <div>
        <AppBar
          className='app-bar'
          title='CAMERIA'
          onLeftIconButtonClick={() => this.toggleDrawerMenu()}
          zDepth={2}
        />
        <Drawer
          docked={false}
          width={200}
          open={this.state.toggle}
          onRequestChange={(toggle) => this.setState({ toggle })}
        >
          <Link to={'/'} className='link'><MenuItem onClick={() => this.handleClose()}>Home</MenuItem></Link>
          <Link to={'/detect'} className='link'><MenuItem onClick={() => this.handleClose()}>Recognize</MenuItem></Link>
          <Link to={'/register'} className='link'><MenuItem onClick={() => this.handleClose()}>Register</MenuItem></Link>
          <Link to={'/gallery'} className='link'><MenuItem onClick={() => this.handleClose()}>Gallery</MenuItem></Link>
        </Drawer>

        <Switch>
          <Route exact path='/' render={(props) => <LandingPage {...props} />} />
          <Route path='/detect' render={(props) => <Capture {...props} />} />
          <Route path='/register' render={(props) => <Register {...props} />} />
          <Route path='/gallery' render={(props) => <Gallery {...props} gallery={this.props.galleryData} />} />
          <Route path='**' render={(props) => <LandingPage {...props} />} />
        </Switch >
      </div >
    );
  }
}

function mapStateToProps(state) {
  return {
    galleryData: state.galleryData
  };
}

export default connect(mapStateToProps, { fetchGalleryData })(App);