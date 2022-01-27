import React from 'react'
import PropTypes from 'prop-types'

const Button = ({ text, icon, onClick }) => {
  return (
    <div className="flex justify-center">
      <button
        className="flex flex-col bg-red-600 hover:bg-red-400 rounded text-sm mt-5 mb-5 m-0 transition ease-out duration-500 hover:shadow-2xl sm:text-lg m-16 pt-5 pb-5 p-20 items-center text-white"
        onClick={(event) => onClick(event)}
      >
        {text}
        {icon}
      </button>
    </div>
  )
}

Button.propTypes = {
  text: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  icon: PropTypes.node,
}

export default Button
