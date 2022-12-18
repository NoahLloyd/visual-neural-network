import React, { useRef } from "react";
import Neuron from "./Neuron";
import "./Layer.css";

type Props = {
  neurons: {
    key: string;
    value: number;
    bias: number;
    connections: { value: number; weight: number; key: string }[];
  }[];
  type: string;
  highestValue: number;
  activationFunction: string;
};

const Layer = (props: Props) => {
  return (
    <div className="layer">
      {props.neurons.map((neuron) => {
        return (
          <div key={Math.random().toString() + Math.random().toString()}>
            <Neuron
              properties={neuron}
              type={props.type}
              highestValue={props.highestValue}
              activationFunction={props.activationFunction}
            />
          </div>
        );
      })}
    </div>
  );
};

export default Layer;
