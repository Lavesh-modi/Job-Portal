import React from "react";
import { useState } from "react";
import Data from "../component/Jobpagedata.json";

export default function SearchFun() {
  const [filterList, setFilterList] = useState([]);

  const filterBySearch = (event) => {
    // Access input value
    const query = event.target.value;
    console.log(query, "query");
    if (query) {
      // Create copy of item list
      let updatedList = [...Data];

      updatedList = updatedList.filter((item) => {
        return item.name.toLowerCase().indexOf(query.toLowerCase()) !== -1;
      });
      // Trigger render with updated values
      setFilterList(updatedList);
    } else {
      setFilterList([]);
    }
  };

  return (
    <div id="item-list jbskdfbsdkfj">
      <div className="search-header">
        <div className="search-text">Search:</div>
        <input id="search-box" onChange={filterBySearch} />
      </div>
      <div id="item-list">
        <ol>
          {filterList.map((item, index) => (
            <a href={`/"/Company/:comp"/${item.id}`}>
              <li key={index}>{item.name} </li>
            </a>
          ))}
        </ol>
      </div>
    </div>
  );
}
