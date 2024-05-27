import api from '../../utils/api';
import { hideLoading, showLoading } from 'react-redux-loading-bar';
import { receiveThreadsActionCreator } from '../threads/action';
import { receiveUsersActionCreator } from '../users/action';

function asyncGetUsersAndThreads() {
  return async (dispatch) => {
    try {
      dispatch(showLoading());
      const threads = await api.getAllThreads();
      const users = await api.getAllUsers();

      dispatch(receiveThreadsActionCreator(threads));
      dispatch(receiveUsersActionCreator(users));
    } catch (error) {
      alert(error.message);
    }
    dispatch(hideLoading());
  };
}

export { asyncGetUsersAndThreads };