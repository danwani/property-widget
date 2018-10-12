const property = (state, action) => {
  switch (action.type) {
    case "SAVE_PROPERTY":
      state.currentProperty = {
        ...this.state.currentProperty,
        ...action.payload
      };
      return state;
    default:
      return state;
  }
};

export default property;
