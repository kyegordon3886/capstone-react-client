import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
// import likeStory
import { deleteStory, showStory } from '../../api/story'
import Button from 'react-bootstrap/Button'
import moment from 'moment'

class ShowStory extends Component {
  constructor (props) {
    super(props)
    // super is necessary so that we can use the props properly and change them along the way
    // building this component to be an instance of this class and we are using props as an argument to supply data, props are passed where we evoke the instance of this class component 'app.js'

    this.state = {
      story: null,
      liked: false
    }
  }

  componentDidMount () {
    const { match, user, msgAlert } = this.props

    showStory(match.params.id, user)
      .then(res => this.setState({ story: res.data.story }))
      .then(() => {
        this.setState({ liked: this.state.story.likes.filter(like => like.user === user.id) })
      })
      .then(() => {
        msgAlert({
          heading: 'Success',
          message: 'Enjoy the read!',
          variant: 'success'
        })
      })
      .catch(error => {
        msgAlert({
          heading: 'Show story failed',
          message: 'Error message: ' + error.message,
          variant: 'danger'
        })
      })
  }

  handleDelete = () => {
    const { match, user, msgAlert, history } = this.props // destructuring out router stuff and user
    // destructuring = const user = this.props.user
    // match is from react-router-dom and lets us reference the url

    deleteStory(match.params.id, user)
      .then(() => history.push('/my-stories'))
      .then(() => {
        msgAlert({
          heading: 'Success',
          message: 'You deleted a story!',
          variant: 'success'
        })
      })
      .catch(error => {
        msgAlert({
          heading: 'Deletion failed',
          message: 'Story Delete Error: ' + error.message,
          variant: 'danger'
        })
      })
  }

  // handleLike = (event) => {
  //   // const { match, user, msgAlert } = this.props
  //   const { likes, match } = this.state.story.likeStatus
  //   // let isLiked = false
  //   likeStory(match.params.id, user, likes)
  //     .then((res) => this.setState({ likes: likes = true }))
  // }

  //   // let initial state of like = false
  //   // let button text = like
  //   // once the button is clicked, let state = true
  //   // let button text equal 'Liked!'
  //   // if button is clicked again, let state = false
  //   // let button text = unliked
  //   // save all data to server

  render () {
    const { liked } = this.props
    if (this.state.story === null) {
      return 'loading...'
    }

    let likedJSX
    if (liked === false) {
      likedJSX = 'Like'
    } else if (liked === true) {
      likedJSX = 'Liked!'
    }

    //  add owner back in
    const { title, author, description, date, content, owner } = this.state.story
    const { user, history, match } = this.props

    // const likedJSX = () => {
    //   if (this.state.liked === true) {
    //     return <Button>Liked!</Button>
    //   }
    //   if (this.state.liked === false) {
    //     return <Button>Like</Button>
    //   }
    // }
    return (
      <>
        <h3 className='story-title'>{title}</h3>
        <div className='story-details'>
          <h6 className='story-details-title'>Written by:</h6>
          <p className='story-details-info'> {author}</p>
          <h6 className='story-details-title'>Posted:</h6>
          <p className='story-details-info'>{moment.utc(date).format('MM-DD-YYYY')}</p>
          <h6 className='story-details-title'>Description</h6>
          <p className='story-details-info'> {description}</p>
          <h6 className='story-details-title'>Story:</h6>
          <p className='story-details-info'>{content}</p>
          <Button type='submit'>Comment</Button>
          {user._id === owner && (
            <>
              <Button onClick={this.handleDelete}>Delete</Button>
              <Button onClick={() => history.push(`/my-stories/${match.params.id}/edit-story`)}>Edit</Button>
            </>
          )}
          {/* This button allow a user to like to like/unlike this story */}
          <Button onClick={this.handleLike}>{likedJSX}</Button>
        </div>
      </>
    )
  }
}

// component MUST be wrapped to use withRouter
export default withRouter(ShowStory)
