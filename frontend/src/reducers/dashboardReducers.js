import {
  DASHBOARD_ADD_MESSAGE,
  DASHBOARD_REMOVE_MESSAGE,
} from '../constants/dashboardConstants';

export const dashboardReducer = (state = { dashboardMessages: [] }, action) => {
  switch (action.type) {
    case DASHBOARD_ADD_MESSAGE:
      const message = action.payload;
      const existMessage = state.dashboardMessages.find(
        (x) => x.post === message.post
      );

      if (existMessage) {
        return {
          ...state,
          dashboardMessages: state.dashboardMessages.map((x) =>
            x.post === existMessage.post ? message : x
          ),
        };
      } else {
        return {
          ...state,
          dashboardMessages: [...state.dashboardMessages, message],
        };
      }
    case DASHBOARD_REMOVE_MESSAGE:
      return {
        ...state,
        dashboardMessages: state.dashboardMessages.filter(
          (x) => x.post !== action.payload
        ),
      };
    default:
      return state;
  }
};
