import { hideLoading, showLoading } from 'react-redux-loading-bar'
import api from '../../utils/api'

const ActionType = {
  RECEIVE_THREAD_DETAIL: 'RECEIVE_THREAD_DETAIL',
  CLEAR_THREAD_DETAIL: 'CLEAR_THREAD_DETAIL',
  ADD_COMMENT: 'ADD_COMMENT'
}

function receiveThreadDetailActionCreator (threadDetail) {
  return {
    type: ActionType.RECEIVE_THREAD_DETAIL,
    payload: {
      threadDetail
    }
  }
}

function addCommentActionCreator (comment) {
  return {
    type: ActionType.ADD_COMMENT,
    payload: {
      comment
    }
  }
}

function asyncAddComment ({ content, threadId, owner }) {
  return async (dispatch) => {
    dispatch(showLoading())
    try {
      const addedComment = await api.createComment({ content, threadId, owner })
      dispatch(addCommentActionCreator(addedComment))
    } catch (error) {
      console.error('Error adding comment:', error)
      alert('An error occurred while adding the comment. Please try again later.')
    }

    dispatch(hideLoading())
  }
}

function clearThreadDetailActionCreator () {
  return {
    type: ActionType.CLEAR_THREAD_DETAIL
  }
}

function asyncReceiveThreadDetail (id) {
  return async (dispatch) => {
    dispatch(showLoading())
    dispatch(clearThreadDetailActionCreator())

    try {
      const threadDetail = await api.getThreadDetail(id)

      dispatch(receiveThreadDetailActionCreator(threadDetail))
    } catch (error) {
      alert(error.message)
    }

    dispatch(hideLoading())
  }
}

export {
  ActionType,
  receiveThreadDetailActionCreator,
  clearThreadDetailActionCreator,
  asyncReceiveThreadDetail,
  asyncAddComment
}
