import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";

import "./index.scss";
import Header from "./component/Header";
import Datatables from './component/Datatables';
import { columns, data } from "./data/data";
import addRow from "./utils/addRow";

const App = () => {
  const [allData, setAllData] = useState(data);
  useEffect(() => {
    if (data)
      setAllData(data)
  }, [data])
  return (
    <div className="mt-10 text-3xl mx-auto max-w-6xl">
      <Header />
      <button onClick={() => addRow(allData, setAllData, {
        id: allData.length,
        title: 'Beetlejuice',
        year: '1988',
        model: "Beetle",
        section: "Drama"
      })} className="border px-3 text-sm cursor-pointer hover:bg-gray-100">Ekle</button>
      <Datatables data={allData} columns={columns} />
      <div>Name: ankara</div>

    </div>
  )
};
ReactDOM.render(<App />, document.getElementById("app"));
