import React, { Suspense } from "react";
import { ReactComponent as Spinner } from "../../assets/spinner.svg";
import PeopleDirectory from "../../components/categories-directory/PeopleDirectory.component";

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
