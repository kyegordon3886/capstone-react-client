import apiUrl from '../apiConfig'
import axios from 'axios'

export const indexStories = user => {
  return axios({
    method: 'GET',
    url: apiUrl + '/stories',
    headers: {
      Authorization: `Bearer ${user.token}`
    }
  })
}
export const createStory = (data, user) => {
  return axios({
    method: 'POST',
    url: apiUrl + '/stories',
    data: {
      story: data
    },
    headers: {
      Authorization: `Bearer ${user.token}`
    }
  })
}
export const showStory = (id, user) => {
  return axios({
    method: 'GET',
    url: apiUrl + '/stories/' + id,
    headers: {
      Authorization: `Bearer ${user.token}`
    }
  })
}
export const deleteStory = (id, user) => {
  return axios({
    method: 'DELETE',
    url: apiUrl + '/stories/' + id,
    headers: {
      Authorization: `Bearer ${user.token}`
    }
  })
}

export const updateStory = (data, id, user) => {
  return axios({
    method: 'PATCH',
    url: apiUrl + '/stories/' + id,
    data: {
      story: {
        title: data.title,
        author: data.author,
        description: data.description,
        date: data.date,
        content: data.content

      }
    },
    headers: {
      Authorization: `Bearer ${user.token}`
    }
  })
}

// export const rsvpEvent = (id, userId, user, rsvp) => {
//   return axios({
//     method: 'PATCH',
//     url: apiUrl + '/rsvp/' + id,
//     data: {
//       rsvps: {
//         user: userId,
//         rsvpStatus: rsvp
//       }
//     },
//     headers: {
//       Authorization: `Bearer ${user.token}`
//     }
//   })
// }
