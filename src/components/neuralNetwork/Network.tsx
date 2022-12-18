import React, { useEffect, useState } from "react";
import Layer from "./Layer";

type Neuron = {
  key: string;
  value: number;
  bias: number;
  connections: { value: number; weight: number; key: string }[];
};

type Props = {
  layers: Neuron[][];
  highestValue: number;
  activationFunction: string;
};

const Network = (props: Props) => {
  return (
    <div>
      <div className="flex">
        {props.layers.map((layer: any, index: number) => {
          return (
            <Layer
              neurons={layer}
              type={index === 0 ? "input" : "hidden"}
              highestValue={props.highestValue}
              activationFunction={props.activationFunction}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Network;
