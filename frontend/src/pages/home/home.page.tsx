import React, { Suspense } from "react";

import { ReactComponent as Spinner } from "../../assets/spinner.svg";
import CategoriesDirectory from "../../components/categories-directory/CategoriesDirectory.component";

// const CategoriesDirectory = React.lazy(() => import('../../components/categories-directory/CategoriesDirectory.component'));

const HomePage = () => {
  return (
    <div style={style.pageRoot}>
      <Suspense fallback={<Spinner />}>
        <CategoriesDirectory />
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

export default HomePage;
