import { Dispatch } from "redux";
import { TOGGLE_POPUP, TogglePopupDispatchTypes } from "./TogglePopup.types";

// import axios from "axios";

export const TogglePopup =
  (isOpen: boolean) => (dispatch: Dispatch<TogglePopupDispatchTypes>) => {
    dispatch({
      type: TOGGLE_POPUP,
      payload: isOpen,
    });
  };
