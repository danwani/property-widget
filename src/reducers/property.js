import {SAVE_PROPERTY} from "../actions"

const initialState = {
  currentProperty: {
    isInCrm: false,
    image:
      "https://www.endlesssummerresort.com.au/assets/cache/endless-summer-1120269w-2000x1000pcy.jpg",
    address: "Unit 1 9-21 Frank St Coolum Beach 4573",
    plan: "L5, RP720278",
    type: "Apartment",
    area: 200,
    lastSaleValue: 670000,
    lastSaleDate: new Date("02/04/2017"),
    title: "",
    comments: ""
  }
};

const property = (state = initialState, action) => {
  switch (action.type) {
    case SAVE_PROPERTY:
      state.currentProperty = {
        ...state.currentProperty,
        ...action.payload
      };
      return state;
    default:
      return state;
  }
};

export default property;
