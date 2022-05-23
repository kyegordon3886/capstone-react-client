/* eslint-disable no-tabs */
import React, { Component, Fragment } from 'react'
import { Route } from 'react-router-dom'
import { v4 as uuid } from 'uuid'

import AuthenticatedRoute from './components/AuthenticatedRoute/AuthenticatedRoute'
import AutoDismissAlert from './components/AutoDismissAlert/AutoDismissAlert'
import Header from './components/Header/Header'
import SignUp from './components/auth/SignUp'
import SignIn from './components/auth/SignIn'
import SignOut from './components/auth/SignOut'
import ChangePassword from './components/auth/ChangePassword'

import IndexStories from './components/story/Index'
import CreateStory from './components/story/Create'
import ShowStory from './components/story/Show'
import UpdateStory from './components/story/Update'

class App extends Component {
  constructor (props) {
    super(props)
    this.state = {
      user: null,
      msgAlerts: []
    }
  }

  setUser = (user) => this.setState({ user })

  clearUser = () => this.setState({ user: null })

  deleteAlert = (id) => {
    this.setState((state) => {
      return { msgAlerts: state.msgAlerts.filter((msg) => msg.id !== id) }
    })
  }

  msgAlert = ({ heading, message, variant }) => {
    const id = uuid()
    this.setState((state) => {
      return {
        msgAlerts: [...state.msgAlerts, { heading, message, variant, id }]
      }
    })
  }

  render () {
    const { msgAlerts, user } = this.state

    return (
      <Fragment>
	      <Header user={user} />
	      {msgAlerts.map((msgAlert) => (
          <AutoDismissAlert
            key={msgAlert.id}
            heading={msgAlert.heading}
            variant={msgAlert.variant}
            message={msgAlert.message}
            id={msgAlert.id}
            deleteAlert={this.deleteAlert}
          />
        ))}
	      <main className='container'>
	        <Route
            path='/sign-up'
            render={() => (
              <SignUp msgAlert={this.msgAlert} setUser={this.setUser} />
            )}
          />
          <Route
            path='/sign-in'
            render={() => (
              <SignIn msgAlert={this.msgAlert} setUser={this.setUser} />
            )}
          />
          <AuthenticatedRoute
            user={user}
            path='/sign-out'
            render={() => (
              <SignOut
                msgAlert={this.msgAlert}
                clearUser={this.clearUser}
                user={user}
              />
            )}
          />
          <AuthenticatedRoute
            user={user}
            path='/change-password'
            render={() => (
              <ChangePassword msgAlert={this.msgAlert} user={user} />
            )}
          />
          <AuthenticatedRoute
            user={user}
            path='/tell-a-story'
            render={() => <CreateStory msgAlert={this.msgAlert} user={user} />}
          />
          <AuthenticatedRoute
            exact
            user={user}
            path='/all-stories'
            render={() => <IndexStories msgAlert={this.msgAlert} user={user} userOnly={false}/>}
          />
          <AuthenticatedRoute
            exact
            user={user}
            path='/stories/:id'
            render={() => <ShowStory msgAlert={this.msgAlert} user={user} />}
          />
          <AuthenticatedRoute
            exact
            user={user}
            path='/my-stories'
            // userOnly prop used for filtering events that only belong to the user
            render={() => <IndexStories msgAlert={this.msgAlert} user={user} userOnly={true} />}
          />
          <AuthenticatedRoute
            exact
            user={user}
            path='/my-stories/:id/edit-story'
            render={() => <UpdateStory msgAlert={this.msgAlert} user={user} />}
          />
        </main>
      </Fragment>
    )
  }
}

export default App
