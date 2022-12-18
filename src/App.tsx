import React, { useState } from "react";
import "./App.css";
import Network from "./components/neuralNetwork/Network";
import SettingsBar from "./components/settings/SettingsBar";

type Neuron = {
  key: string;
  value: number;
  bias: number;
  connections: { value: number; weight: number; key: string }[];
};

function App() {

  // Todo: add different activation function for output layer
  const [activationFunction, setActivationFunction] = useState("Tanh");

  const [inputs, setInputs] = useState({ array: [1, 2, 3], string: "1,2,3" });

  const [hiddenLayers, setHiddenLayers] = useState({array: [4, 4, 4, 1], string: "4,4,4,1"});

  // const [scale, setScale] = useState(1);


  const changeInputs = (newInputs: string) => {
    // Formats the inputs entered in the input field and updates the state
    setInputs({
      array: newInputs
        .split(",")
        .map((newInput) => Number(newInput.trim()))
        .filter((newInput) => newInput !== 0),
      string: newInputs,
    });
  };

  const changeHiddenLayers = (newHiddenLayers: string) => {
    // Formats the inputs entered in the input field and updates the state
    setHiddenLayers({
      array: newHiddenLayers
        .split(",")
        .map((newHiddenLayer) => Number(newHiddenLayer.trim()))
        .filter((newHiddenLayer) => newHiddenLayer !== 0),
      string: newHiddenLayers,
    });
  };

  // const changeScale = (newScale: number) => {
  //   setScale(newScale)
  // }

  const createUniqueKey = () => {
    return (
      Math.random().toString() +
      Math.random().toString() +
      Math.random().toString()
    );
  };

  const createLayers = (inputs: number[], hiddenLayers: number[]) => {
    // Creates the inputs as neurons
    const inputNeurons = inputs.map((input) => {
      return {
        value: input,
        bias: 0,
        connections: [{ value: 50, weight: 1, key: "" }],
        key: createUniqueKey(),
      };
    });

    const LayerNeurons: any = [
      // Gotta fix that type. Should be: {value: number; bias: number; connections: {value: number; weight: number; key: string;}[][];  key: string;}
      [...inputNeurons],
    ];

    // Loops over all elements in hiddenLayers: Makes each hidden layer
    for (let i = 0; i < hiddenLayers.length; i++) {
      const hiddenLayer = [];

      // Loops over the numbers in hiddenlayers: Makecs an element for each neuron
      for (let j = 0; j < hiddenLayers[i]; j++) {
        const connections = [];
        let weightedSum = 0;

        // Loops over the previous neurons: Makes connections & calculates weighted sum for neuron
        for (let k = 0; k < LayerNeurons[i].length; k++) {
          const connectedNeuronWeight = Math.random() / 1.5;
          const connectedNeuronValue = LayerNeurons[i][k].value;

          // Adds a connection to the connections array
          connections.push({
            value: connectedNeuronValue,
            weight: connectedNeuronWeight,
            key: LayerNeurons[i][k].key,
          });

          // Adds to the weighted sum to get the value
          weightedSum += connectedNeuronWeight * connectedNeuronValue;
        }

        const bias = Math.random();

        hiddenLayer.push({
          value: weightedSum + bias,
          bias: bias,
          connections: connections,
          key: createUniqueKey(),
        });
      }

      LayerNeurons.push(hiddenLayer);
    }

    return LayerNeurons;
  };

  let layers = createLayers(inputs.array, hiddenLayers.array);

  // Gets the highest value to color the neurons relatively
  let highestValue = 0;

  layers.forEach((layer: Neuron[]) => {
    layer.forEach((neuron: Neuron) => {
      if (neuron.value > highestValue) highestValue = neuron.value;
    });
  });

  highestValue = 3;

  return (
    <div className="App">
      <SettingsBar
        setActivationFunction={setActivationFunction}
        inputs={inputs.string}
        changeInputs={changeInputs}
        hiddenLayers={hiddenLayers.string}
        changeHiddenLayers={changeHiddenLayers}
        outputs={hiddenLayers.array[hiddenLayers.array.length - 1].toString()}
        // scale={scale}
        // changeScale={"changeScale"}

      />
      <main style={{transform: `scale(${"scale"})`}} className="flex justify-center items-center text-center neural-network">
        <Network
          activationFunction={activationFunction}
          layers={layers}
          highestValue={highestValue}
        />
      </main>
    </div>
  );
}

export default App;
