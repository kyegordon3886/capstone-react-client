import React, { Component } from 'react'
import { indexStories } from '../../api/story'
import { Link } from 'react-router-dom'
import Card from 'react-bootstrap/Card'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import '../../index.scss'
// import moment from 'moment'

class IndexStories extends Component {
  constructor (props) {
    super(props)

    this.state = {
      stories: null
    }
  }

  componentDidMount () {
    const { user, msgAlert } = this.props

    indexStories(user)
      .then((res) => this.setState({ stories: res.data.stories }))
      .then(() => {
        msgAlert({
          heading: 'Success!',
          message: 'Enjoy Reading!',
          variant: 'success'
        })
      })
      .catch(error => {
        msgAlert({
          heading: 'Index Failed',
          message: 'Index Error: ' + error.message,
          variant: 'danger'
        })
      })
  }

  render () {
    const { stories } = this.state
    const { userOnly, user } = this.props
    if (stories === null) {
      return 'Loading...'
    }

    let storiesJSX
    // checking if there are no stories in the entire app
    if (stories.length === 0) {
      storiesJSX = 'Be the first to tell a story!'
      // checking if user is not logged-in
    // } else if (user) {
    //   storiesJSX = stories.map((story) => (
    //     <Col key={story._id}>
    //       <Card border='secondary'>
    //         <Card.Header>
    //           <Link
    //             className='story-link'
    //             to={`/all-stories/${story._id}`}>
    //             {story.title}
    //           </Link>
    //         </Card.Header>
    //         <Card.Body>
    //           <Card.Title>{story.author}</Card.Title>
    //           <Card.Subtitle>
    //             {story.description}
    //           </Card.Subtitle>
    //           {/* <Card.Text>{story.likes.length} Likes</Card.Text> */}
    //         </Card.Body>
    //       </Card>
    //     </Col>
    //   ))
    } else if (userOnly) {
      // filtering events then mapping through the event where owner is equal to user id
      storiesJSX = stories.filter(story => story.owner === user._id).map(story => (
        <Col key={story._id}>
          <Card border="secondary" background-color="#6a994e">
            <Card.Header>
              <Link
                className='story-link'
                to={`/stories/${story._id}/`}>
                {story.title}
              </Link>
            </Card.Header>
            <Card.Body>
              <Card.Title>
                {story.description}
              </Card.Title>
              <Card.Subtitle>
                {story.author}
              </Card.Subtitle>
              {/* <Card.Text>
                {moment(date).format('MM-DD-YYYY')}
              </Card.Text> */}
            </Card.Body>
          </Card>
        </Col>
      ))
      // checking if user has no events
      if (storiesJSX.length === 0) {
        storiesJSX = 'Write a story'
      }
    // mapping through events if userOnly is false
    } else {
      storiesJSX = stories.map((story) => (
        <Col key={story._id}>
          <Card border="secondary">
            <Card.Header>
              <Link
                className='story-link'
                to={`/stories/${story._id}`}>
                {story.title}
              </Link>
            </Card.Header>
            <Card.Body>
              <Card.Title>
                {story.description}
              </Card.Title>
              <Card.Subtitle>
                {story.author}
              </Card.Subtitle>
              {/* <Card.Text>
                {moment(date).format('MM-DD-YYYY')}
              </Card.Text> */}
            </Card.Body>
          </Card>
        </Col>
      ))
    }

    return (
      <>
        <div className='main'><img className='main-img' src={process.env.PUBLIC_URL + '/main.jpeg'}/></div>
        <div className='main-content'>
          <h3 className='page-title'>{userOnly ? 'My Stories' : 'Stories'}</h3>
          <Row xs={1} md={3} className="g-4">
            {storiesJSX}
          </Row>
        </div>
      </>
    )
  }
}

export default IndexStories
