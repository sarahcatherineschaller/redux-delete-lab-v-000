import React, { Component } from 'react'
import BandInput from './BandInput';
import { connect } from 'react-redux';
import Bands from './Bands';

class BandsContainer extends Component {

  renderBands = () => this.props.bands.map((band, id) => <Band key={id} text={band}) />

  render() {
    return (
      <div>
        {this.renderBands()}

      </div>
    )
  }
}

const mapStateToProps = ({ bands }) => ({ bands })

const mapDispatchToProps = dispatch => ({
  addBand: name => dispatch({ type: "ADD_BAND", name })
})

export default connect(mapStateToProps, mapDispatchToProps)(BandsContainer)
