export const setFavorite = payload => ({
  type: 'SET_FAVORITE',
  payload,
})

export const loginRequest = payload => ({
  type: 'LOGIN_REQUEST',
  payload,
})

export const logoutRequest = payload => ({
  type: 'LOGOUT_REQUEST',
  payload,
})

export const registerRequest = payload => ({
  type: 'REGISTER_REQUEST',
  payload,
})

export const deteleFavorite = payload => ({
  type: 'DELETE_FAVORITE',
  payload,
})

export const getVideoSource = payload => ({
  type: 'GET_VIDEO_SOURCE',
  payload,
})

export const setError = payload => ({
  type: 'SET_ERROR',
  payload,
})

exportconst registerUser = (payload, redirectUrl) => async (dispatch) => {
  try {
    const { data } = await axios.post('/auth/sign-up', payload);
    dispatch(registerRequest(data));
    window.location.href = redirectUrl;
  } catch (error) {
    console.log(error);
  }
};

export { setFavorite as default }