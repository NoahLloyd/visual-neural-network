import React, { useEffect } from "react";
import "./Neuron.css";

type Props = {
  properties: {
    key: string;
    value: number;
    bias: number;
    connections: { value: number; weight: number }[];
  };
  type: string;
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

  const activationFunctions = {
    ReLu: (x: number) => x > 0 ? x : 0.01*x 
  }

  const valueToColor = (value: number) => {
    // 100 >= value >= 0

    // Change shade of gray depending on number
    return `rgb(${value * 2.55}, ${value * 2.55}, ${value * 2.55})`;

    // Change opacity depending on number
    // return `rgba(255, 255, 255, ${value / 100})`
  };

  if (props.type === "input") {

    return (
      <div
        className="neuron"
        style={{
          backgroundColor: valueToColor(props.properties.value),
          color: props.properties.value >= 50 ? "#181818" : "#eee",
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
        className="neuron"
        style={{
          backgroundColor: valueToColor(props.properties.value),
          color: props.properties.value >= 50 ? "#181818" : "#eee",
          borderColor: props.properties.value >= 50 ? "#000" : "#fff",
        }}
      >
        {Math.round(activationFunctions.ReLu(props.properties.value))}
        {/* // !TODO Add on hover element that shows value, bias, etc. */}
      </div>
    );

  }

}

export default Neuron;
