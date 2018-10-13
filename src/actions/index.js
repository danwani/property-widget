export const SAVE_PROPERTY = "SAVE_PROPERTY"
export const CHANGE_TAB = "CHANGE_TAB"

export const saveProperty = payload => ({
  type: SAVE_PROPERTY,
  payload
});

export const changeTab = tab => ({
  type: CHANGE_TAB,
  tab
});
