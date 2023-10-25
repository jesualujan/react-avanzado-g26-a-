import React, { useState } from "react";
import ChildComponent from "./ChildComponent";

const ParentComponent = () => {
  const [data, setData] = useState(null);
  const handleCallback = (childData) => {
    setData(childData);
  };
  return (
    <>
      <ChildComponent
        header={
          "Este texto se renderiza en ChildComponent desde ParentComponent (padre a hijo)"
        }
        parentCallback={handleCallback}
      />
      <h2>{data}</h2>
    </>
  );
};

export default ParentComponent;
