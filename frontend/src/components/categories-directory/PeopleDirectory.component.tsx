import { useQuery, gql } from "@apollo/client";
import React, { Suspense, useEffect, useState } from "react";
import { LOAD_CATEGORIES } from "../../GraphQL/Queries";
import CategoryItem from "../category-item/CategoryItem";
import CSS from "csstype";
import { TogglePopup } from "../../actions/TogglePopup.action";
import { useDispatch, useSelector } from "react-redux";
import { RootStore } from "../../Store";
// import PopupComponent from '../popup/Popup.component';
import SingleJoke from "../single-joke/SingleJoke.component";
import { ReactComponent as Spinner } from "../../assets/spinner.svg";
import axios, { AxiosResponse } from "axios";
import PeopleItem from "../people-item/PeopleItem";

const PopupComponent = React.lazy(() => import("../popup/Popup.component"));

type Category = {
  name: string;
};
const getData = async () => {
  return await axios.get("https://localhost:5001/api/chuck/categories");
};

type Swapi = {
  name: string;
  birth_year: string;
  gender: string;
};

const PeopleDirectory = () => {
  const [category, setCategory] = useState("");
  const [data, setData] = useState<any[]>([]);
  const popupState = useSelector((state: RootStore) => state.popup);
  const dispatch = useDispatch();
  console.log(popupState);

  const response = getData();
  console.log(
    "file: PeopleDirectory.component.tsx  .  line 28  .  PeopleDirectory  .  response",
    response
  );
  //   const { data, error, loading } = useQuery(LOAD_CATEGORIES);

  useEffect(() => {
    axios.get("https://localhost:5001/api/Swapi").then((response) => {
      setData(() => [...response.data]);
    });
  }, []);

  async function toggle() {
    dispatch(TogglePopup(popupState.isOpen));
  }

  return (
    <Suspense fallback={<Spinner />}>
      <div style={style.root} className="root">
        {popupState.isOpen ? <PopupComponent category={category} /> : null}
        {data
          ? data.map((elem: Swapi) => (
              <PeopleItem
                name={elem.name}
                gender={elem.gender}
                birth_year={elem.birth_year}
              />
            ))
          : null}
        {/* <button onClick={toggle}></button> */}
      </div>
    </Suspense>
  );
};

const rootStyle: CSS.Properties = {
  width: "100%",
  display: "flex",
  flexWrap: "wrap",
  justifyContent: "space-between",
};

const style = {
  root: rootStyle,
};

export default PeopleDirectory;
