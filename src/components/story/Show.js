import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import { deleteStory, showStory } from '../../api/story'
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

  //   handleRsvp = () => {
  //     const { match, user, msgAlert } = this.props
  //     const { rsvps } = this.state.event

  //     let isRsvp = false // setting initial rsvpStatus to false

  //     // filtering through rsvps and grabbing only the rsvp that belongs to the user
  //     const myRsvp = rsvps.filter(rsvp => rsvp.user === user._id).pop()

  //     // checking if myRsvp is defined (if the user has already rsvpd)
  //     if (myRsvp) {
  //       // then setting isRsvp to the users rsvpStatus (setting it to true)
  //       isRsvp = myRsvp.rsvpStatus
  //     }

  //     // checking if rsvp is false then make an api call
  //     if (!isRsvp) {
  //       rsvpEvent(match.params.id, user._id, user, true)
  //         .then(() => this.componentDidMount())
  //         .then(() => {
  //           msgAlert({
  //             heading: 'Event rsvp success',
  //             message: 'Yippie! Success!',
  //             variant: 'success'
  //           })
  //         })
  //         .catch(error => {
  //           msgAlert({
  //             heading: 'Event rsvp failed',
  //             message: 'Event rsvp Error: ' + error.message,
  //             variant: 'danger'
  //           })
  //         })
  //     } else {
  //       msgAlert({
  //         heading: 'Oops!',
  //         message: 'Looks like you are already rsvpd',
  //         variant: 'warning'
  //       })
  //     }
  //   }

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
          {user._id === owner && (
            <>
              <Button onClick={this.handleDelete}>Delete</Button>
              <Button onClick={() => history.push(`/my-stories/${match.params.id}/edit-story`)}>Update</Button>
            </>
          )}
          {/* This button allow anyone to rsvp to an event */}
          {/* <Button onClick={this.handleRsvp}>RSVP</Button> */}
        </div>
      </>
    )
  }
}

// component MUST be wrapped to use withRouter
export default withRouter(ShowStory)
