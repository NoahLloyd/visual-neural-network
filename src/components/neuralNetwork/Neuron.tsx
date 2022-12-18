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
};

function Neuron(props: Props) {
  //* Gets the neurons value based on weights and bias
  // useEffect(() => {

  //   let calculatedValue = 0;

  //   // Adds all connections to the neuron's value to get weighted sum
  //   props.properties.connections.forEach(connection => {
  //     calculatedValue += (connection.value * connection.weight)
  //   })

  //   // Adds the bias
  //   calculatedValue += props.properties.bias

  //   props.updateValue(props.properties.key, calculatedValue)

  // }, [])

  const activationFunction = (x: number, func: string) => {

    let result;

    switch (func) {
      case "ReLU":
        result = x > 0 ? x : 0;
        break;
      case "Leaky ReLU":
        result = x > 0 ? x : 0.01 * x;
        break;
      case "tanh":
        result = Math.tanh(x);
        break;
      case "sigmoid":
        result = 1 / (1 + 2.71828 ** -x);
        break;
      case "binary":
        result = x >= 0 ? 1 : 0;
        break;
      case "linear":
        result = x;
        break;
      default:
        result = x;
        break;
    }

    return result;
  };

  const valueToColor = (value: number) => {
    // Change shade of gray depending on number
    const multiplier = 255 / props.highestValue;
    console.log(
      `rgb(${value * multiplier}, ${value * multiplier}, ${value * multiplier})`
    );
    return `rgb(${value * multiplier}, ${value * multiplier}, ${
      value * multiplier
    })`;
  };

  if (props.type === "input") {
    return (
      <div
        key={Math.random().toString() + Math.random().toString()}
        className="neuron"
        style={{
          backgroundColor: valueToColor(props.properties.value),
          color:
            props.properties.value > props.highestValue / 2
              ? "#181818"
              : "#eee",
          borderColor: "#fff",
        }}
      >
        {Math.round(props.properties.value)}
        {/* // !TODO Add on hover element that shows value, bias, etc. */}
      </div>
    );
  } else {
    return (
      <div
        key={Math.random().toString() + Math.random().toString()}
        className="neuron"
        style={{
          backgroundColor: valueToColor(props.properties.value),
          color:
            props.properties.value > props.highestValue / 2
              ? "#181818"
              : "#eee",
          borderColor: "#fff",
        }}
      >
        <div>
          {Math.round(
            activationFunction(props.properties.value, "sigmoid") * 10
          ) / 10}
          {/* // !TODO Add on hover element that shows value, bias, etc. */}
        </div>
        {props.properties.connections.map((connection) => {
          return <path></path>;
        })}
      </div>
    );
  }
}

export default Neuron;
