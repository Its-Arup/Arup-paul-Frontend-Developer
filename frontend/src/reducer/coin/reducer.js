import { COIN_FALIURE, COIN_REQUEST, COIN_SUCCESS } from "./actionType";

const initState = {
  coin: [],
  isLoading: false,
  isError: false,
};

export const reducer = (state = initState, { type, payload }) => {
  switch (type) {
    case COIN_REQUEST:
      return {
        ...state,
        isLoading: true,
        isError: false,
      };
    case COIN_SUCCESS:
      return {
        ...state,
        isLoading: false,
        isError: false,
        coin: payload.coin,
      };
    case COIN_FALIURE:
      return {
        ...state,
        isLoading: false,
        isError: true,
      };
    default:
      return state;
  }
};
