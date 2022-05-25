import React, { Component } from 'react'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'

import { withRouter } from 'react-router-dom'

// import EventForm from '../shared/EventForm'

import { createStory } from '../../api/story'

class CreateStory extends Component {
  constructor (props) {
    super(props)

    this.state = {
      title: '',
      author: '',
      description: '',
      date: '',
      content: '',
      owner: ''
    }
  }

  handleChange = (event) => {
    // The event.target of this event will be an input element
    // Which will have a `name` attribute (key in the state) & a `value` (what the user typed)
    this.setState({ [event.target.name]: event.target.value })
  }

  handleSubmit = (event) => {
    event.preventDefault()
    // add history below to do the push
    const { user, msgAlert, history } = this.props

    createStory(this.state, user)
      .then(res => history.push('/stories/' + res.data.story._id))
      .then(() => msgAlert({ heading: 'Story Created!', message: 'Thanks for sharing!', variant: 'success' }))
      .catch(err => {
        msgAlert({
          heading: 'Story creation failed :(',
          message: 'Something went wrong: ' + err.message,
          variant: 'danger'
        })
      })
  }

  render () {
    return (
      <>
        <div className='form-box'>
          <div className='row'>
            <div className='col-sm-10 col-md-8 mx-auto mt-5'>
              <h3 className='page-title'>Tell Your Story</h3>
              <Form onSubmit={this.handleSubmit}>
                <Form.Group controlId='title'>
                  <Form.Label>Story Title</Form.Label>
                  <Form.Control
                    required
                    name='title'
                    value={this.state.title}
                    placeholder='Story title'
                    onChange={this.handleChange}
                  />
                </Form.Group>
                <Form.Group controlId='author'>
                  <Form.Label>Written By</Form.Label>
                  <Form.Control
                    required
                    name='author'
                    value={this.state.author}
                    placeholder='Author'
                    onChange={this.handleChange}
                  />
                </Form.Group>
                <Form.Group controlId='description'>
                  <Form.Label>Story Description</Form.Label>
                  <Form.Control
                    as='textarea'
                    rows='{5}'
                    required
                    name='description'
                    value={this.state.description}
                    placeholder='Something simple about your story'
                    onChange={this.handleChange}
                  />
                </Form.Group>
                <Form.Group controlId='date'>
                  <Form.Label>Date Today</Form.Label>
                  <Form.Control
                    required
                    name='date'
                    type='date'
                    value={this.state.date}
                    placeholder='Date'
                    onChange={this.handleChange}
                  />
                </Form.Group>
                <Form.Group controlId='content'>
                  <Form.Label>Your Story</Form.Label>
                  <Form.Control
                    as='textarea'
                    rows='{1000}'
                    required
                    name='content'
                    value={this.state.content}
                    placeholder='Tell Your Story Here!'
                    onChange={this.handleChange}
                  />
                </Form.Group>
                <Button type='submit'>Publish</Button>
              </Form>
            </div>
          </div>
        </div>
      </>
    )
  }
}
// add withRouter() when doing the history push above
export default withRouter(CreateStory)
