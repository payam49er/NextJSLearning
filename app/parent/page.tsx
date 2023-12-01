import Child from "@/components/childeren/child";
import React from "react";
import Parent from "@/components/childeren/parent";
import Secondchild from "@/components/childeren/secondchild";

const ChildrenPropExample = () => {
  return (
    <div>
      <h1>Children Prop Example</h1>
      <Parent>
        <Child />
        <Secondchild />
      </Parent>
    </div>
  );
};

export default ChildrenPropExample;
