import React, { Suspense } from "react";
import ReactDOM from "react-dom";

import "./index.scss";
import { columns, data } from "./data/data";
// import Header from "ankara/Header"
const Header = React.lazy(() => import("ankara/Header"))
const Datatables = React.lazy(() => import("ankara/Datatables"))

const App = () => (
  <div className="mt-10 text-3xl mx-auto max-w-6xl">
    <Suspense fallback={<div>Loading...</div>}>
      <Header />
      <Datatables data={data} columns={columns} />
    </Suspense>
    <div>Name: istanbul</div>

  </div>
);
ReactDOM.render(<App />, document.getElementById("app"));
