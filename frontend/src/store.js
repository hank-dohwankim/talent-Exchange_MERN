import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import { postDetailsReducer, postListReducer } from './reducers/postReducers';
import { dashboardReducer } from './reducers/dashboardReducers';
import { userLoginReducer } from './reducers/userReducers';

const reducer = combineReducers({
  postList: postListReducer,
  postDetails: postDetailsReducer,
  dashboard: dashboardReducer,
  userLogin: userLoginReducer,
});

const dashboardMessagesFromStrage = localStorage.getItem('dashboardMessages')
  ? JSON.parse(localStorage.getItem('dashboardMessages'))
  : [];

const userInfoFromStorage = localStorage.getItem('userInfo')
  ? JSON.parse(localStorage.getItem('userInfo'))
  : null;

const initialState = {
  dashboard: { dashboardMessages: dashboardMessagesFromStrage },
  userLogin: { userInfo: userInfoFromStorage },
};

const middleware = [thunk];

const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
