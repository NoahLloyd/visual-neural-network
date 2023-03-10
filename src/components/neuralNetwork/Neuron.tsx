import React, { useEffect } from "react";
import Connection from "./Connection";
import "./Neuron.css";

type Props = {
  properties: {
    key: string;
    value: number;
    bias: number;
    connections: { value: number; weight: number; key: string }[];
  };
  type: string;
  highestValue: number;
  activationFunction: string;
};

function Neuron(props: Props) {

  const activationFunction = (x: number, func: string) => {

    let result;

    switch (func) {
      case "ReLU":
        result = x > 0 ? x : 0;
        break;
      case "Leaky ReLU":
        result = x > 0 ? x : 0.01 * x;
        break;
      case "Tanh":
        result = Math.tanh(x);
        break;
      case "Sigmoid":
        result = 1 / (1 + 2.71828 ** -x);
        break;
      case "Binary":
        result = x >= 0 ? 1 : 0;
        break;
      case "Linear":
        result = x;
        break;
      default:
        result = Math.tanh(x);
        break;
    }

    return result;
  };

  const newValue = props.type === "input" ? props.properties.value : activationFunction(props.properties.value, props.activationFunction)

  const valueToColor = (value: number) => {
    // Change shade of gray depending on number
    const multiplier = 255 / activationFunction(props.highestValue, props.activationFunction);

    return `rgb(${newValue * multiplier}, ${newValue * multiplier}, ${
      newValue * multiplier
    })`;
  };

  // if (props.type === "input") {
    return (
    //   <div
    //     key={Math.random().toString() + Math.random().toString()}
    //     className="neuron"
    //     style={{
    //       backgroundColor: valueToColor(props.properties.value),
    //       color:
    //         props.properties.value > props.highestValue / 2
    //           ? "#181818"
    //           : "#eee",
    //       borderColor: "#fff",
    //     }}
    //   >
    //     {Math.round(props.properties.value)}
    //     {/* // !TODO Add on hover element that shows value, bias, etc. */}
    //   </div>
    // );
//   } else {
//     return (
      <div
        key={Math.random().toString() + Math.random().toString()}
        className="neuron"
        style={{
          backgroundColor: valueToColor(props.properties.value),
          color:
            newValue > props.highestValue / 2
              ? "#181818"
              : "#eee",
          borderColor: "#fff",
        }}
      >
        <div>
          {Math.round(newValue*10)/10}
          {/* // !TODO Add on hover element that shows value, bias, etc. */}
        </div>
        {props.properties.connections.map((connection) => {
          return <div></div>;
        })}
      </div>
    );
//   }
}

export default Neuron;
