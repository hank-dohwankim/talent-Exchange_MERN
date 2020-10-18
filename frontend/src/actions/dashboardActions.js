import axios from 'axios';
import { DASHBOARD_ADD_MESSAGE } from '../constants/dashboardConstants';

export const addToDashboard = (id, user) => async (dispatch, getState) => {
  const { data } = await axios.get(`/api/posts/${id}`);
  dispatch({
    type: DASHBOARD_ADD_MESSAGE,
    payload: {
      post: data._id,
      title: data.title,
      description: data.description,
      user: data.user,
    },
  });
  localStorage.setItem(
    'dashboardMessages',
    JSON.stringify(getState().dashboard.dashboardMessages)
  );
};
