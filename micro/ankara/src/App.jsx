import React from "react";
import ReactDOM from "react-dom";

import "./index.scss";
import Header from "./component/Header";
import Datatables from './component/Datatables';
import { columns, data } from "./data/data";

const App = () => (
  <div className="mt-10 text-3xl mx-auto max-w-6xl">
    <Header />
    <Datatables data={data} columns={columns} />
    <div>Name: ankara</div>

  </div>
);
ReactDOM.render(<App />, document.getElementById("app"));
