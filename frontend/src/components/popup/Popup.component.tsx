import React, { Suspense, useEffect, useState } from "react";
import CSS from "csstype";
import { useDispatch, useSelector } from "react-redux";

// import {RootStore} from '../../Store'
import { RootStore } from "../../Store";
import { GetRandomJokeAction } from "../../actions/GetRandomJoke.action";
import SingleJoke from "../single-joke/SingleJoke.component";
import { TogglePopup } from "../../actions/TogglePopup.action";

import { ReactComponent as Spinner } from "../../assets/spinner.svg";
import axios from "axios";

interface PopupComponentI {
  category: string | undefined;
}

const PopupComponent = ({ category }: PopupComponentI) => {
  const dispatch = useDispatch();
  const popupState = useSelector((state: RootStore) => state.popup);
  const [data, setData] = useState<any>([]);

  const jokeState = useSelector((state: RootStore) => state.joke);

  useEffect(() => {
    axios
      .get("https://api.chucknorris.io/jokes/random?category=" + category)
      .then((response) => {
        setData(() => response.data);
        if (response.status === 200) {
          const payload = {
            icon_url: response.data.icon_url,
            value: response.data.value,
          };
          dispatch(GetRandomJokeAction(payload));
        }
      });
  }, []);

  function handleClick(e: any) {
    e.stopPropagation();
    // debugger
    dispatch(TogglePopup(popupState.isOpen));
  }

  return (
    <div style={style.root} onClick={handleClick} className="popup-root">
      <div style={style.placer} className="popup-placer">
        <Suspense fallback={<Spinner />}>
          <SingleJoke value={jokeState.value} icon_url={jokeState.icon_url} />
        </Suspense>
      </div>
    </div>
  );
};

const rootStyle: CSS.Properties = {
  width: "100vw",
  height: "100%",
  position: "absolute",
  top: 0,
  left: 0,
  background: "#131313cf",
  display: "flex",
  justifyContent: "center",
  alignContent: "center",
};
const placer: CSS.Properties = {
  position: "relative",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
};
const style = {
  root: rootStyle,
  placer: placer,
};

export default PopupComponent;
