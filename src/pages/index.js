import React from 'react'
import PropTypes from 'prop-types'
import Layout from '../components/Layout'
import Home from '../components/Home'
import Button from '../components/Button'
import { navigate } from 'gatsby'
import { FaRegArrowAltCircleRight } from 'react-icons/fa'
import ExitModal from '../components/ExitModal/exitModal'

class RootIndex extends React.Component {
  render() {
    function handleClick(event) {
      event.preventDefault()
      {
        navigate('/caseStudies')
      }
    }
    return (
      <Layout location={this.props.location}>
        <ExitModal />
        <Home />
        <Button
          className={
            'flex self-center bg-red-600 rounded text-sm mt-5 mb-5 m-3 transition ease-out duration-500 hover:shadow-2xl md:text-lg pt-5 pb-4 p-20 items-center text-white hover:bg-transparent hover:text-red-600 hover:font-bold border-4 border-transparent hover:border-red-600 uppercase'
          }
          onClick={handleClick}
          text="See our success stories"
          icon={<FaRegArrowAltCircleRight size={30} className="ml-5" />}
          type={'button'}
        />
      </Layout>
    )
  }
}

RootIndex.propTypes = {
  location: PropTypes.shape({
    pathname: PropTypes.string.isRequired,
  }).isRequired,
}

export default RootIndex
