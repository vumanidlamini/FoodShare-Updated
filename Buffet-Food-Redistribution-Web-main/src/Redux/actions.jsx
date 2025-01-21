// import {  ACCEPT_REQUEST, DECLINE_REQUEST, NOTIFY_RECIPIENT } from './actionTypes';

// export const acceptRequest = (requestId) => ({
//   type: ACCEPT_REQUEST,
//   payload: requestId,
// });

//   export const declineRequest = (requestId) => ({
//     type: DECLINE_REQUEST,
//     payload: requestId,
//   });
  
//   export const notifyRecipient = (notification) => ({
//     type: NOTIFY_RECIPIENT,
//     payload: notification,
//   });

  // src/Redux/actions.js
// import { ACCEPT_REQUEST, DECLINE_REQUEST, MARK_AS_COLLECTED } from './actionTypes';

// export const acceptRequest = (id) => ({
//   type: ACCEPT_REQUEST,
//   payload: { id }
// });

// export const declineRequest = (id) => ({
//   type: DECLINE_REQUEST,
//   payload: { id }
// });

// export const markAsCollected = (id) => ({
//   type: MARK_AS_COLLECTED,
//   payload: { id }
// });

// src/Redux/actions.js
import { ACCEPT_REQUEST, DECLINE_REQUEST, MARK_AS_COLLECTED } from './actionTypes';

export const acceptRequest = (id) => ({
  type: ACCEPT_REQUEST,
  payload: { id }
});

export const declineRequest = (id) => ({
  type: DECLINE_REQUEST,
  payload: { id }
});

export const markAsCollected = (id) => ({
  type: MARK_AS_COLLECTED,
  payload: { id }
});
