/**
* test scenario for threadsReducer
*
* - talkReducers function
*  - should return the initial state when given by unknown action
*  - should return the detailThread when given by RECEIVE_THREAD_DETAIL action
*  - should return the comment when given by ADD_COMMENT action
*
*/

import { describe, it, expect } from 'vitest'
import threadDetailReducer from './reducer'

describe('threadDetailReducer', () => {
  it('should return the initial state', () => {
    // arrange
    const initialState = null
    const action = { type: 'UNKNOWN' }

    // action
    const nextState = threadDetailReducer(initialState, action)

    // assert
    expect(nextState).toEqual(initialState)
  })

  it('should handle RECEIVE_THREAD_DETAIL', () => {
    // arrange
    const initialState = []
    const action = {
      type: 'RECEIVE_THREAD_DETAIL',
      payload: {
        detailThread: [
          {
            id: 'thread-1',
            title: 'Thread Pertama',
            body: 'Ini adalah thread pertama',
            category: 'General',
            createdAt: '2021-06-21T07:00:00.000Z',
            owner: {
              id: 'users-1',
              name: 'John Doe',
              avatar: 'https://generated-image-url.jpg'
            },
            upVotesBy: [],
            downVotesBy: []
          }
        ]
      }
    }

    // action
    const nextState = threadDetailReducer(initialState, action)

    // assert
    expect(nextState).toEqual(action.payload.threadDetail)
  })

  it('should handle ADD_COMMENT', () => {
    // arrange
    const initialState =
    {
      id: 'thread-1',
      title: 'Thread Pertama',
      body: 'Ini adalah thread pertama',
      category: 'General',
      createdAt: '2021-06-21T07:00:00.000Z',
      owner: {
        id: 'users-1',
        name: 'John Doe',
        avatar: 'https://generated-image-url.jpg'
      },
      comments: [{

        id: 'comment-1',
        content: 'Ini adalah komentar pertama',
        createdAt: '2021-06-21T07:00:00.000Z',
        upVotesBy: [],
        downVotesBy: [],
        owner: {
          id: 'users-1',
          name: 'John Doe',
          email: 'john@example.com'
        }
      }
      ]
    }

    const action = {
      type: 'ADD_COMMENT',
      payload: {
        comments: {
          id: 'comment-2',
          content: 'Ini adalah komentar kedua',
          createdAt: '2021-06-21T07:00:00.000Z',
          upVotesBy: [],
          downVotesBy: [],
          owner: {
            id: 'users-1',
            name: 'John Doe',
            email: 'john@example.com'
          }
        }
      }
    }

    // action
    const nextState = threadDetailReducer(initialState, action)

    // assert
    expect(nextState).toEqual({
      ...initialState,
      comments: [action.payload.comment, ...initialState.comments]
    })
  })
})
