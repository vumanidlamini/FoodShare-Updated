// import { combineReducers } from 'redux';
// import { ACCEPT_REQUEST, DECLINE_REQUEST } from './actionTypes';

// const initialState = {
//   requests: [],
// };

// const requestsReducer = (state = initialState.requests, action) => {
//   switch (action.type) {
  
//     case ACCEPT_REQUEST:
//       return state.map(request =>
//         request.id === action.payload ? { ...request, status: 'accepted' } : request
//       );
//     case DECLINE_REQUEST:
//       return state.map(request =>
//         request.id === action.payload ? { ...request, status: 'declined' } : request
//       );
//     default:
//       return state;
//   }
// };

// const rootReducer = combineReducers({
//   requests: requestsReducer,
//   // other reducers can be added here if needed
// });

// export default rootReducer;

// // reducer.js
// import { ACCEPT_REQUEST, DECLINE_REQUEST, MARK_AS_COLLECTED } from './actions';

// const initialState = {
//   requests: []
// };

// src/Redux/reducer.js
// import { ACCEPT_REQUEST, DECLINE_REQUEST, MARK_AS_COLLECTED } from './actionTypes';

// const initialState = {
//   requests: []
// };

// const reducer = (state = initialState, action) => {
//   switch (action.type) {
//     case ACCEPT_REQUEST:
//       return {
//         ...state,
//         requests: state.requests.map(request =>
//           request.id === action.payload.id ? { ...request, status: 'Waiting for Collection' } : request
//         )
//       };
//     case DECLINE_REQUEST:
//       return {
//         ...state,
//         requests: state.requests.map(request =>
//           request.id === action.payload.id ? { ...request, status: 'Declined' } : request
//         )
//       };
//     case MARK_AS_COLLECTED:
//       return {
//         ...state,
//         requests: state.requests.map(request =>
//           request.id === action.payload.id ? { ...request, status: 'Collected' } : request
//         )
//       };
//     default:
//       return state;
//   }
// };

// export default reducer;
// src/Redux/reducer.js
import { ACCEPT_REQUEST, DECLINE_REQUEST, MARK_AS_COLLECTED } from './actionTypes';

const initialState = {
  requests: []
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ACCEPT_REQUEST:
      return {
        ...state,
        requests: state.requests.map(request =>
          request.id === action.payload.id ? { ...request, status: 'Waiting for Collection' } : request
        )
      };
    case DECLINE_REQUEST:
      return {
        ...state,
        requests: state.requests.map(request =>
          request.id === action.payload.id ? { ...request, status: 'Declined' } : request
        )
      };
    case MARK_AS_COLLECTED:
      return {
        ...state,
        requests: state.requests.map(request =>
          request.id === action.payload.id ? { ...request, status: 'Collected' } : request
        )
      };
    default:
      return state;
  }
};

export default reducer;
