import {
  TogglePopupDispatchTypes,
  TOGGLE_POPUP,
} from "../actions/TogglePopup.types";

interface DefaultStateI {
  isOpen: boolean;
}

const defaultState: DefaultStateI = {
  isOpen: false,
};

const TogglePopupReducer = (
  state: DefaultStateI = defaultState,
  action: TogglePopupDispatchTypes
): DefaultStateI => {
  switch (action.type) {
    case TOGGLE_POPUP:
      return { ...state, isOpen: !state.isOpen };
    default:
      return state;
  }
};

export default TogglePopupReducer;
