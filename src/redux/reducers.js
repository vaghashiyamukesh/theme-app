import { TOGGLE_DARKTHEME } from './actions';

const initialState = {
  darkTheme: false,
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case TOGGLE_DARKTHEME:
      return {
        ...state,
        darkTheme: !state.darkTheme,
      };
    default:
      return state;
  }
}