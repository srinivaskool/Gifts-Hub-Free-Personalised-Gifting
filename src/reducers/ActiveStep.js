export const activestepReducer = (state = { day: "" }, action) => {
  switch (action.type) {
    case "ACTIVE_STEP":
      return { ...state, ...action.payload };
    default:
      return state;
  }
};
