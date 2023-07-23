export const Reducers = (state, action) => {
  switch (action.type) {
  }
  return { ...state };
};

export const FilterReducer = (state, action) => {
  switch (action.type) {
    case "FAST_DELIVERY":
      return { ...state, fastdelivery: !state.fastdelivery };
    case "SORT":
      return { ...state, sort: action.payload };
    case "RATING":
      return { ...state, rating: action.payload };
    case "SEARCH":
      return { ...state, searchquery: action.payload };
    case "CLEAR":
      return {
        fastdelivery: false,
        rating: 0,
        searchquery: "",
      };
    default:
      return { ...state };
  }
};
