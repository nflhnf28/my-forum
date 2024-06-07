/**
 * skenario test
 *
 * - asyncReceiveLeaderboards thunk
 *  - should dispatch action correctly when data fetching success
 *  - should dispatch action and call alert correctly when data fetching failed
*/

import { describe, it, beforeEach, afterEach, vi, expect } from 'vitest'
import api from '../../utils/api'
import { asyncReceiveLeaderboards, receiveLeaderboardsActionCreator } from './action'
import { showLoading, hideLoading } from 'react-redux-loading-bar'

// ... kode fake data
const fakeLeaderboardsResponse = [
  {
    user: {
      id: 'users-1',
      name: 'John Doe',
      email: 'john@example.com',
      avatar: 'https://generated-image-url.jpg'
    },
    score: 10
  }
]

const fakeErrorResponse = new Error('Ups, something went wrong')
// end of kode fake data

describe('asyncReceiveLeaderboards thunk', () => {
  describe('asyncReceiveLeaderboards thunk', () => {
    beforeEach(() => {
      api._getLeaderboards = api.getLeaderboards
    })

    afterEach(() => {
      api.getLeaderboards = api._getLeaderboards

      // delete backup data
      delete api._getLeaderboards
    })

    it('should dispatch action correctly when data fetching success', async () => {
      // arrange
      // stub implementation
      api.getLeaderboards = () => Promise.resolve(fakeLeaderboardsResponse)

      // mock dispatch
      const dispatch = vi.fn()

      // action
      await asyncReceiveLeaderboards()(dispatch)

      // assert
      expect(dispatch).toHaveBeenCalledWith(showLoading())
      expect(dispatch).toHaveBeenCalledWith(receiveLeaderboardsActionCreator(fakeLeaderboardsResponse))
      expect(dispatch).toHaveBeenCalledWith(hideLoading())
    })

    it('should dispatch action and call alert correctly when data fetching failed', async () => {
      // arrange
      // stub implementation
      api.getLeaderboards = () => Promise.reject(fakeErrorResponse)

      // mock dispatch
      const dispatch = vi.fn()

      // mock alert
      window.alert = vi.fn()

      // action
      await asyncReceiveLeaderboards()(dispatch)

      // assert
      expect(dispatch).toHaveBeenCalledWith(showLoading())
      expect(dispatch).toHaveBeenCalledWith(hideLoading())
      expect(window.alert).toHaveBeenCalledWith(fakeErrorResponse.message)
    })
  })
})
