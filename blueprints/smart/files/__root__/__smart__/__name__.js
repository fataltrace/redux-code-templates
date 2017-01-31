import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'

class <%= pascalEntityName %> extends Component {
  static propTypes = {

  }

  render () {
    const {} = this.props
    
    return (
      <div></div>
    )
  }
}

const mapStateToProps = state => {
  return {

  }
}

export default connect(mapStateToProps)(<%= pascalEntityName %>)