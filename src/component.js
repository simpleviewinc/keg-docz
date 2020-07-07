import React from 'react'
import PropTypes from 'prop-types'
export const Duper = (props) => {
  return (
    <div>
      { props.text }
    </div>
  )
}


Duper.propTypes = {
  /**
   * This is a description for Duper text prop.
   * Add some text to Duper.
   */
  text: PropTypes.string,
}
