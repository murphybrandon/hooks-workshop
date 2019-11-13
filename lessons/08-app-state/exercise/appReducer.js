const initialState = { authAttempted: false, auth: null, user: null }

const appStateReducer = (state, action) => {
  switch (action.type) {
    case "AUTH_CHANGE": {
      return { ...state, auth: action.auth, authAttempted: true }
    }
    case "USER_FOUND": {
      return {...state, user: action.user}
    }
    case "USER_ERROR": {
      throw new Error();
      return state;
    }
    default:
      return state
  }
}

export { initialState }
export default appStateReducer
