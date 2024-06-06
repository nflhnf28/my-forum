/**
 * skenario test
 *
 * - asyncGetUsersAndThreads thunk
 *  - should dispatch action correctly when data fetching success
 *  - should dispatch action and call alert correctly when data fetching failed
*/

import { describe, it, beforeEach, afterEach, vi, expect } from 'vitest'
import api from '../../utils/api'
import { asyncGetUsersAndThreads } from './action'
import { showLoading, hideLoading } from 'react-redux-loading-bar'
import { receiveThreadsActionCreator } from '../threads/action'
import { receiveUsersActionCreator } from '../users/action'

// ... kode fake data
const fakeTalksResponse = [
  {
    id: 'thread-1',
    title: 'Thread Pertama',
    body: 'Ini adalah thread pertama',
    category: 'General',
    createdAt: '2021-06-21T07:00:00.000Z',
    ownerId: 'users-1',
    upVotesBy: [],
    downVotesBy: [],
    totalComments: 0
  }
]

const fakeUsersResponse = [
  {
    id: 'user-123',
    name: 'John Doe',
    email: 'john@example.com',
    avatar: 'https://generated-image-url.jpg'
  }
]

const fakeErrorResponse = new Error('Ups, something went wrong')
// end of kode fake data

describe('asyncGetUsersAndThreads thunk', () => {
  describe('asyncGetUsersAndThreads thunk', () => {
    beforeEach(() => {
      api._getAllUsers = api.getAllUsers
      api._getAllThreads = api.getAllThreads
    })

    afterEach(() => {
      api.getAllUsers = api._getAllUsers
      api.getAllThreads = api._getAllThreads

      // delete backup data
      delete api._getAllUsers
      delete api._getAllTalks
    })

    it('should dispatch action correctly when data fetching success', async () => {
      // arrange
      // stub implementation
      api.getAllUsers = () => Promise.resolve(fakeUsersResponse)
      api.getAllThreads = () => Promise.resolve(fakeTalksResponse)

      // mock dispatch
      const dispatch = vi.fn()

      // action
      await asyncGetUsersAndThreads()(dispatch)

      // assert
      expect(dispatch).toHaveBeenCalledWith(showLoading())
      expect(dispatch).toHaveBeenCalledWith(receiveThreadsActionCreator(fakeTalksResponse))
      expect(dispatch).toHaveBeenCalledWith(receiveUsersActionCreator(fakeUsersResponse))
      expect(dispatch).toHaveBeenCalledWith(hideLoading())
    })

    it('should dispatch action and call alert correctly when data fetching failed', async () => {
      // arrange
      // stub implementation
      api.getAllUsers = () => Promise.reject(fakeErrorResponse)
      api.getAllThreads = () => Promise.reject(fakeErrorResponse)

      // mock dispatch
      const dispatch = vi.fn()

      // mock alert
      window.alert = vi.fn()

      // action
      await asyncGetUsersAndThread()(dispatch)

      // assert
      expect(dispatch).toHaveBeenCalledWith(showLoading())
      expect(dispatch).toHaveBeenCalledWith(hideLoading())
      expect(window.alert).toHaveBeenCalledWith(fakeErrorResponse.message)
    })
  })
})
