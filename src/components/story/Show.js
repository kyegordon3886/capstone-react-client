import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import { deleteStory, showStory, likeStory, unlikeStory } from '../../api/story'
import Button from 'react-bootstrap/Button'
import moment from 'moment'

class ShowStory extends Component {
  constructor (props) {
    super(props)

    this.state = {
      story: null
    }
  }

  componentDidMount () {
    const { match, user, msgAlert } = this.props

    showStory(match.params.id, user)
      .then(res => this.setState({ story: res.data.story }))
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
    const { match, user, msgAlert, history } = this.props

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

      handleLikes = () => {
        const { match, user, msgAlert } = this.props
        const { likes } = this.state.story

        let isLiked = false // setting initial like status to false

        // filtering through likes and grabbing only the like that belongs to the user
        const myLike = likes.filter(like => like.user === user._id).pop()

        // checking if myLike is defined (if the user has already liked)
        if (myLike) {
          // then setting isLiked to the users likeStatus (setting it to true)
          isLiked = myLike.likeStatus
        }

        // checking if liked is false then make an api call
        if (!isLiked) {
          likeStory(match.params.id, user._id, user, true)
            .then(() => this.componentDidMount())
            .then(() => {
              msgAlert({
                heading: 'Success',
                message: 'You liked this story!',
                variant: 'success'
              })
            })
            .catch(error => {
              msgAlert({
                heading: 'Fail',
                message: 'Error: ' + error.message,
                variant: 'danger'
              })
            })
        }
        // checking if liked is true then make an api call
        if (isLiked) {
          unlikeStory(match.params.id, user._id, user, false)
            .then(() => this.componentDidMount())
            .then(() => {
              msgAlert({
                heading: 'Success',
                message: 'You unliked this story!',
                variant: 'success'
              })
            })
            .catch(error => {
              msgAlert({
                heading: 'Fail',
                message: 'Error: ' + error.message,
                variant: 'danger'
              })
            })
        }
      }

      render () {
        if (this.state.story === null) {
          return 'loading...'
        }
        //  add owner back in
        const { title, author, description, date, content, owner } = this.state.story
        const { user, history, match } = this.props
        // const rsvpJSX = rsvps.map(rsvp => (
        //   <li key={rsvp._id}>{rsvp.user}</li>
        // ))

        return (
          <>
            <h3 className='story-title'>{title}</h3>
            <div className='story-details'>
              <h6 className='story-details-title'>Written by:</h6>
              <p className='story-details-info'> {author}</p>
              <h6 className='story-details-title'>Posted:</h6>
              <p className='story-details-info'>{moment(date).format('MMM do YYYY')}</p>
              <h6 className='story-details-title'>Description</h6>
              <p className='story-details-info'> {description}</p>
              <h6 className='story-details-title'>Story:</h6>
              <p className='story-details-info'>{content}</p>
              {/* <h6 className='story-details-title'>RSVP:</h6> */}
              {/* {rsvpJSX} */}
              <Button type='submit'>Comment</Button>
              {user._id === owner && (
                <>
                  <Button onClick={this.handleDelete}>Delete</Button>
                  <Button onClick={() => history.push(`/my-stories/${match.params.id}/edit-story`)}>Update</Button>
                </>
              )}
              {/* This button allow a user to like to like this story */}
              <Button onClick={this.handleLike}>Like</Button>
            </div>
          </>
        )
      }
}

// component MUST be wrapped to use withRouter
export default withRouter(ShowStory)
