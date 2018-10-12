const menu = (state, action) => {
  switch (action.type) {
    case "CHANGE_TAB":
      state.currentlyOpen = action.tab;
      return state;
    default:
      return state;
  }
};

export default menu;
