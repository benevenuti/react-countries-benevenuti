import { defineState } from 'redux-localstore';
import { Config } from '../../config';
import { CHANGE_THEME } from '../actions/actionTypes';

const defaultState = {
  theme: Config.INITIAL_THEME
};

const initialState = defineState(defaultState)('changeThemeReducer');

export const changeThemeReducer = (state = initialState, action) => {
  const newTheme =
    state.theme.title === Config.THEMES[0].title ? Config.THEMES[1] : Config.THEMES[0];
  switch (action.type) {
    case CHANGE_THEME:
      return {
        ...state,
        theme: newTheme
      };
    default:
      return state;
  }
};
