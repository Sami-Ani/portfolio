const initialState = {
  activeTab: "home",
};

export const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ACTIVE_TAB":
      return {
        ...state,
        activeTab: action.payload,
      };
    default:
      return state;
  }
};
