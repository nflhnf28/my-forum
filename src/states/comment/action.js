import api from '../../utils/api'
import { hideLoading, showLoading } from 'react-redux-loading-bar'

const ActionType = {
  ADD_COMMENT: 'ADD_COMMENT'
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

export {
  ActionType,
  addCommentActionCreator,
  asyncAddComment
}
