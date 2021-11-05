import React, { Suspense, useEffect, useState } from "react";

import CSS from "csstype";
// import PopupComponent from '../popup/Popup.component';

import { ReactComponent as Spinner } from "../../assets/spinner.svg";
import axios from "axios";
import PeopleItem from "../people-item/PeopleItem";

type Swapi = {
  name: string;
  birth_year: string;
  gender: string;
};

const PeopleDirectory = () => {
  const [data, setData] = useState<any[]>([]);

  useEffect(() => {
    axios.get("https://localhost:5001/api/Swapi").then((response) => {
      setData(() => [...response.data]);
    });
  }, []);

  return (
    <Suspense fallback={<Spinner />}>
      <div style={style.root} className="root">
        {data
          ? data.map((elem: Swapi) => (
              <PeopleItem
                name={elem.name}
                gender={elem.gender}
                birth_year={elem.birth_year}
              />
            ))
          : null}
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
