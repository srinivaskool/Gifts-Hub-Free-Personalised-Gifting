export const redirectUserReducer = (state = { days_redirect: "" }, action) => {
  switch (action.type) {
    case "REDIRECT_USER":
      return { ...state, ...action.payload };
    default:
      return state;
  }
};
