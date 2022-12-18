import React from "react";
import './SettingsBar.css'

type Props = {
    setActivationFunction: (func: string) => void;
    changeInputs: (newInputs: string) => void;
    inputs: string;
    changeHiddenLayers: (newHiddenLayers: string) => void;
    hiddenLayers: string;
    outputs: string;
    // scale: number;
    // changeScale: (newScale: number) => void;
};

const SettingsBar = (props: Props) => {
  return (
    <div>
      <div className="networkControls flex">
        <div className="flex-col flex mr-8">
          <label htmlFor="ActivationFunctionSelect">Activation function</label>
          <select id="ActivationFunctionSelect" onChange={(e) => props.setActivationFunction(e.target.value)}>
            <option value="Tanh">Tanh</option>
            <option value="Sigmoid">Sigmoid</option>
            <option value="ReLU">ReLU</option>
            <option value="Leaky ReLU">Leaky ReLU</option>
            <option value="Linear">Linear</option>
            <option value="Binary">Binary</option>
          </select>
        </div>
        <div className="flex flex-col mr-8">
            <label htmlFor="NumberOfInputsInput">Inputs - comma seperated</label>
            <input value={props.inputs} onChange={(e) => props.changeInputs(e.target.value)} id="NumberOfInputsInput" className="settingsBarInput rounded" type="text" />
        </div>
        <div className="flex flex-col mr-8">
            <label htmlFor="NumberOfHiddenLayersInput">Hidden layers: No. of neurons - comma seperated</label>
            <input value={props.hiddenLayers} onChange={(e) => props.changeHiddenLayers(e.target.value === "" ? "1" : e.target.value)} id="NumberOfHiddenLayersInput" className="settingsBarInput rounded" type="text" />
        </div>
        <div className="flex flex-col mr-8">
            <label htmlFor="NumberOfOutputs">Amount of outputs</label>
            <input onChange={(e) => props.changeInputs(e.target.value)} id="NumberOfOutputs" className="settingsBarInput rounded" type="number" />
        </div>
        <div className="flex flex-col">
            <label htmlFor="ChangeScaleOfNeuralNetwork">Zoom</label>
            {/* <input onChange={(e) => props.changeScale(Number(e.target.value))} id="ChangeScaleOfNeuralNetwork" className="settingsBarInput rounded" type="range" /> */}
        </div>
      </div>
    </div>
  );
};

export default SettingsBar;
