export const editScheduledReducer = (state = { text: "" }, action) => {
  switch (action.type) {
    case "EDIT_SCHEDULED":
      return { ...state, ...action.payload };
    default:
      return state;
  }
};
