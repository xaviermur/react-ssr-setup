import React from "react";
import Header from "./header/index";
import Textarea from "./textarea/index";

const Items = {
  header: Header,
  textarea: Textarea
};

const item = (props,itemId,templateId,handleReportChange) => {
  if (typeof Items[props.type] !== "undefined") {
    return React.createElement(Items[props.type], {
      key: itemId,
      item: props,
      templateId: templateId,
      handleReportChange: handleReportChange
    });
  }
  return React.createElement(
    () => <div>Item {props.type} doesn't exist!</div>,
    { key: itemId }
  );
};

export default item;
