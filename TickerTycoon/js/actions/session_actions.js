import * as APIUtil from '../util/session_api_util';

export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER';
export const RECEIVE_ERRORS = 'RECEIVE_ERRORS';

export const receiveCurrentUser = currentUser => ({
  type: RECEIVE_CURRENT_USER,
  currentUser,
});

export const receiveErrors = errors => ({
  type: RECEIVE_ERRORS,
  errors,
});

export const signup = params => dispatch => (
  APIUtil.signup(params)
    .then(user => dispatch(receiveCurrentUser(user)),
     err => dispatch(receiveErrors(err.responseJSON)))
);

export const login = params => dispatch => (
  APIUtil.login(params)
    .then(user => dispatch(receiveCurrentUser(user)),
     err => dispatch(receiveErrors(err.responseJSON)))
);

export const logout = () => dispatch => (
  APIUtil.logout().then(() => dispatch(receiveCurrentUser(null)))
);