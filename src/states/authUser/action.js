/**
 * @TODO: Define all the actions (creator) for the authUser state
 */
import api from '../../utils/api';
import { hideLoading, showLoading } from 'react-redux-loading-bar';

const ActionType = {
	SET_AUTH_USER: 'SET_AUTH_USER',
	UNSET_AUTH_USER: 'UNSET_AUTH_USER',
};

function setAuthUserActionCreator(authUser) {
	return {
		type: ActionType.SET_AUTH_USER,
		payload: {
			authUser,
		},
	};
}

function unsetAuthUserActionCreator() {
	return {
		type: ActionType.UNSET_AUTH_USER,
		payload: {
			authUser: null,
		},
	};
}

// proses login async
function asyncSetAuthUser({ email, password }) {
	return async (dispatch) => {
		dispatch(showLoading());
		try {
			const token = await api.login({ email, password });
			api.putAccessToken(token);
			const authUser = await api.getOwnProfile();

			dispatch(setAuthUserActionCreator(authUser));
		} catch (error) {
			alert(error.message);
		}

		dispatch(hideLoading());
	};
}

// proses logout async
function asyncUnsetAuthUser() {
	return (dispatch) => {
		dispatch(unsetAuthUserActionCreator());
		api.putAccessToken('');
	};
}

export {
	ActionType,
	setAuthUserActionCreator,
	unsetAuthUserActionCreator,
	asyncSetAuthUser,
	asyncUnsetAuthUser,
};