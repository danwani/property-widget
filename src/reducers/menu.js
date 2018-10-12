const initialState = [
  {
    currentlyOpen: "details"
  }
];

const menu = (state = initialState, action) => {
  switch (action.type) {
    case "CHANGE_TAB":
      state.currentlyOpen = action.tab;
      return state;
    default:
      return state;
  }
};

export default menu;
