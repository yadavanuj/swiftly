import React from "react";
import { SwiftlyInput } from "./SwiftlyInput";
import { jsonSchema, viewProps } from "../schema/bulkhead";
import { mergeDeep } from "../libs/not.perfect.merger";


const properties = {};
mergeDeep(properties, [jsonSchema.properties, viewProps.properties]);
const propertyKeys = Object.keys(properties);


export function Swiftly() {
  const nodes = propertyKeys.map((key) => {
    const prop = properties[key];
    return (
      <SwiftlyInput
        id={key}
        labelDesc={prop.description}
        dataType={prop.type}
        key={key}
        hint={prop.hint}
      />
    );
  });

  return <div>{nodes}</div>;
}

/**
 * Read schema
 * Apply validation checks in composable manner
 * Manage state (...?)
 * 
 */
class SwiftlyCore {

}
