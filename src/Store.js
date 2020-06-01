import { createStore, combineReducers } from "redux";

// Types
const HANDLE_SUBSCRIBTION = "HANDLE_SUBSCRIBTION";

// Actions
export const handleSubscribtion = (payload) => ({
  type: HANDLE_SUBSCRIBTION,
  payload,
});

// Reducers
const videoReducer = (state = { isStreamSubscribed: false }, action) => {
  switch (action.type) {
    case HANDLE_SUBSCRIBTION:
      return { ...state, isStreamSubscribed: action.payload };
    default:
      return state;
  }
};
// Root Reducers
const rootReducer = combineReducers({
  videoChat: videoReducer,
});

// Store
export const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
