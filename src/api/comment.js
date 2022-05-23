import apiUrl from '../apiConfig'
import axios from 'axios'

export const createComment = (data, user) => {
  return axios({
    method: 'POST',
    url: apiUrl + '/comments',
    data: {
      comment: data
    },
    headers: {
      Authorization: `Bearer ${user.token}`
    }
  })
}

export const deleteComment = (id, user) => {
  return axios({
    method: 'DELETE',
    url: apiUrl + '/comments/' + id,
    headers: {
      Authorization: `Bearer ${user.token}`
    }
  })
}

export const updateComment = (data, id, user) => {
  return axios({
    method: 'PATCH',
    url: apiUrl + '/comments/' + id,
    data: {
      story: {
        title: data.title,
        content: data.content,
        storyId: data.story.id
      }
    },
    headers: {
      Authorization: `Bearer ${user.token}`
    }
  })
}
