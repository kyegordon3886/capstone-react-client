import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
// API request
import { updateStory, showStory } from '../../api/story'
// import MovieForm from '../shared/MovieForm'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'

class UpdateStory extends Component {
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

  componentDidMount () {
    // one of the automatic router props we get is the match object - that has data about the params in our front-end route url
    const { match, user, msgAlert } = this.props

    showStory(match.params.id, user)
      .then(res => this.setState({ story: res.data.story }))
      .then(() => msgAlert({
        heading: 'Success',
        message: 'Enjoy the read! ',
        variant: 'success'
      }))
      .catch(err => msgAlert({
        heading: 'Failure... :(',
        message: 'Something went wrong: ' + err.message,
        variant: 'danger'
      }))
  }

  handleChange = (event) =>
    this.setState({
      [event.target.name]: event.target.value
    })

    handleSubmit = (event) => {
      event.preventDefault()

      const { user, msgAlert, history, match } = this.props

      updateStory(this.state, match.params.id, user)
        .then(res => history.push('/stories/' + match.params.id))
        .then(() => msgAlert({
          heading: 'Story Updated!',
          message: 'Your edits have been applied.',
          variant: 'success'
        }))
        .catch(err => {
          msgAlert({
            heading: 'Story edits failed :(',
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
                <h3 className='page-title'>Edit Your Story</h3>
                <Form onSubmit={this.handleSubmit}>
                  <Form.Group controlId='title'>
                    <Form.Label>Story Title</Form.Label>
                    <Form.Control
                      required
                      name='title'
                      value={this.state.title}
                      placeholder={this.state.story?.title}
                      onChange={this.handleChange}
                    />
                  </Form.Group>
                  <Form.Group controlId='author'>
                    <Form.Label>Author</Form.Label>
                    <Form.Control
                      required
                      name='author'
                      value={this.state.author}
                      placeholder={this.state.story?.author}
                      onChange={this.handleChange}
                    />
                    <Form.Group controlId='description'>
                      <Form.Label>Description</Form.Label>
                      <Form.Control
                        required
                        name='description'
                        value={this.state.description}
                        placeholder={this.state.story?.description}
                        onChange={this.handleChange}
                      />
                    </Form.Group>
                  </Form.Group>
                  <Form.Group controlId='date'>
                    <Form.Label>Date</Form.Label>
                    <Form.Control
                      required
                      name='date'
                      type='date'
                      value={this.state.date}
                      placeholder={this.state.story?.date}
                      onChange={this.handleChange}
                    />
                  </Form.Group>
                  <Form.Group controlId='content'>
                    <Form.Label>Your Story</Form.Label>
                    <Form.Control
                      required
                      name='content'
                      value={this.state.content}
                      placeholder={this.state.story?.content}
                      onChange={this.handleChange}
                    />
                  </Form.Group>
                  <Button type='submit'>Submit</Button>
                </Form>
              </div>
            </div>
          </div>
        </>
      )
    }
}

export default withRouter(UpdateStory)
