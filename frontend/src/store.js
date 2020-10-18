import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import { postDetailsReducer, postListReducer } from './reducers/postReducers';
import { dashboardReducer } from './reducers/dashboardReducers';

const reducer = combineReducers({
  postList: postListReducer,
  postDetails: postDetailsReducer,
  dashboard: dashboardReducer,
});

const dashboardMessagesFromStrage = localStorage.getItem('dashboardMessages')
  ? JSON.parse(localStorage.getItem('dashboardMessages'))
  : [];

const initialState = {
  dashboard: { dashboardMessages: dashboardMessagesFromStrage },
};

const middleware = [thunk];

const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
