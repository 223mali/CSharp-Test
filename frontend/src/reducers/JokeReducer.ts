import {
  GetRandomJokeDispatchTypes,
  GET_RANDOM_JOKE,
} from "../actions/GetRandomJoke.types";

interface DefaultStateI {
  icon_url: string;
  value: string;
}

const defaultState: DefaultStateI = {
  icon_url: "",
  value: "",
};

const JokeReducer = (
  state: DefaultStateI = defaultState,
  action: GetRandomJokeDispatchTypes
): DefaultStateI => {
  switch (action.type) {
    case GET_RANDOM_JOKE:
      return { ...action.payload };

    default:
      return state;
  }
};

export default JokeReducer;
