import React from 'react'
import PropTypes from 'prop-types'

const PrimeraApp = ({saludo}) => {
  return (
    <div>
      <h1>{saludo}</h1>
    </div>
  )
}

PrimeraApp.propTypes = {
    saludo :PropTypes.string
}

export default PrimeraApp
