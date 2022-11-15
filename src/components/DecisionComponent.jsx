import React from "react";

function DecisionComponent(props) {
  return (
    <div
      data-status={props.status}
      className="group flex justify-center rounded-lg data-[status=stop]:bg-red-200 data-[status=ready]:bg-orange-200 data-[status=go]:bg-green-200 my-6 py-8 w-96"
    >
      <h1 className="font-bold text-2xl  group-data-[status=stop]:text-red-800 group-data-[status=ready]:text-orange-800 group-data-[status=go]:text-green-800">
        {props.decision}
      </h1>
    </div>
  );
}

export default DecisionComponent;
