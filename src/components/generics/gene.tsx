import React from "react";
import List from "./List";
const gene = () => {
  return (
    <div>
      {/* <List items={[ "Batman", "Superman", "Wonder woman"]} onClick={(item) => console.log(item)}/> */}
      {/* <List items={[1, 2, 3]} onClick={(item) => console.log(item)} /> */}
      <List
        items={[
          { id: 1, first: "Bruce", last: "wayne" },
          { id: 2, first: "Clark", last: "Kent" },
          { id: 3, first: "Princess", last: "Diana" },
        ]}
        onClick={(item) => console.log(item)}
      />
    </div>
  );
};

export default gene;
