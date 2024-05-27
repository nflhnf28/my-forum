import { hideLoading } from 'react-redux-loading-bar';
import api from '../../utils/api';

const ActionType = {
	RECEIVE_THREAD_DETAIL: 'RECEIVE_THREAD_DETAIL',
	CLEAR_THREAD_DETAIL: 'CLEAR_THREAD_DETAIL',
	// TOGGLE_LIKE_THREAD_DETAIL: 'TOGGLE_LIKE_THREAD_DETAIL',
};

function receiveThreadDetailActionCreator(threadDetail) {
	return {
		type: ActionType.RECEIVE_THREAD_DETAIL,
		payload: {
			threadDetail,
		},
	};
}

function clearThreadDetailActionCreator() {
	return {
		type: ActionType.CLEAR_THREAD_DETAIL,
	};
}

// function toggleLikeThreadDetailActionCreator(userId) {
//   return {
//     type: ActionType.TOGGLE_LIKE_THREAD_DETAIL,
//     payload: {
//       userId,
//     },
//   };
// }

function asyncReceiveThreadDetail(id) {
	return async (dispatch) => {
		// dispatch(showLoading());
		dispatch(clearThreadDetailActionCreator());

		try {
			const threadDetail = await api.getThreadDetail(id);
			// console.log(id);
			dispatch(receiveThreadDetailActionCreator(threadDetail));
		} catch (error) {
			alert(error.message);
		}

		dispatch(hideLoading());
	};
}

// function asyncToggleLikeThreadDetail() {
//   return async (dispatch, getState) => {
//     dispatch(showLoading());
//     const { authUser, threadDetail } = getState();
//     dispatch(toggleLikeThreadDetailActionCreator(authUser.id));

//     try {
//       await api.toggleLikeThread(threadDetail.id);
//     } catch (error) {
//       alert(error.message);
//     }

//     dispatch(hideLoading());
//   };
// }

export {
	ActionType,
	receiveThreadDetailActionCreator,
	clearThreadDetailActionCreator,
	// toggleLikeThreadDetailActionCreator,
	asyncReceiveThreadDetail,
	// asyncToggleLikeThreadDetail,
};