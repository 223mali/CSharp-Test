import React, { Suspense, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { GetSample } from "../../actions/SampleAction";
// import CategoriesDirectory from "../../components/categories-directory/CategoriesDirectory.component";
import { RootStore } from "../../Store";
import { ReactComponent as Spinner } from "../../assets/spinner.svg";
import CategoriesDirectory from "../../components/categories-directory/CategoriesDirectory.component";
import PeopleDirectory from "../../components/categories-directory/PeopleDirectory.component";

// const CategoriesDirectory = React.lazy(() => import('../../components/categories-directory/CategoriesDirectory.component'));

const PeoplePage = () => {
  return (
    <div style={style.pageRoot}>
      <Suspense fallback={<Spinner />}>
        <PeopleDirectory />
      </Suspense>
    </div>
  );
};

const style = {
  pageRoot: {
    paddingBottom: "2em",
    paddingTop: "1em",
  },
};

export default PeoplePage;
