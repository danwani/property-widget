import { CHANGE_TAB } from "../actions";

const initialState = {
  currentlyOpen: "tabs"
};

const menu = (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_TAB:
      return {currentlyOpen: action.tab};
    default:
      return state;
  }
};

export default menu;
