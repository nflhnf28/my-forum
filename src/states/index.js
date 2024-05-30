/**
 * @TODO: Create Redux store
 */
import { configureStore } from '@reduxjs/toolkit'
import { loadingBarReducer } from 'react-redux-loading-bar'
import authUserReducer from './authUser/reducer'
import threadDetailReducer from './threadDetail/reducer'
import isPreloadReducer from './isPreload/reducer'
import usersReducer from './users/reducer'
import commentsReducer from './comment/reducer'
import threadsReducer from './threads/reducer'
import leaderboardsReducer from './leaderboards/reducer'

const store = configureStore({
  reducer: {
    authUser: authUserReducer,
    isPreload: isPreloadReducer,
    users: usersReducer,
    threads: threadsReducer,
    threadDetail: threadDetailReducer,
    comments: commentsReducer,
    leaderboards: leaderboardsReducer,
    loadingBar: loadingBarReducer
  }
})

export default store
