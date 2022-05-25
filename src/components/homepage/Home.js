import React, { Component } from 'react'
// import { Link } from 'react-router-dom'
// import Card from 'react-bootstrap/Card'
import Row from 'react-bootstrap/Row'
// import Col from 'react-bootstrap/Col'
import '../../index.scss'
// import moment from 'moment'

class HomePage extends Component {
  render () {
    return (
      <>
        <div className='main'><img className='main-img' src={process.env.PUBLIC_URL + '/main.jpeg'}/></div>
        <div className='main-content'>
          <Row xs={1} md={3} className="g-4">
          </Row>
          <h3 className='home-page-title'>Welcome to StoryTellers!</h3>
          <p className='home-page-content'>Come share your stories, be they truth or fiction! The idea behind this app was to bring about a creative space for people to exercise their minds in writing. There is something special about plunking away at a keyboard and telling a story that we believe is therapeutic, and allows a person to let their mind breathe. The intention is to connect people through stories as a way of seeing the commonalities we share in thought, but also the very unique differences. The mind is an incredible thing! Exercise it! Be imaginative! Tell a story!</p>
          <Row xs={1} md={3} className="g-4">
          </Row>
        </div>
      </>
    )
  }
}

export default HomePage
