import React, { useEffect, useState } from "react";
import Layer from "./Layer";

type Neuron = {key: string; value: number; bias: number; connections: { value: number; weight: number; key: string;}[]; }

type Props = {};

const Network = (props: Props) => {

  const createUniqueKey = () => {
    return Math.random().toString() + Math.random().toString() + Math.random().toString()
  }

  // Layers -> Neurons -> Weights

  const inputs = [2, 5, 1]

  const hiddenLayers = [4, 4, 4, 1]
  
  const createLayers = (inputs: number[], hiddenLayers: number[]) => {

    // Creates the inputs as neurons
    const inputNeurons = inputs.map(input => {
      return {value: input, bias: 0, connections: [{value: 50, weight: 1, key: ""}], key: createUniqueKey()}
    }) 

    const LayerNeurons: any = [ // Gotta fix that type. Should be: {value: number; bias: number; connections: {value: number; weight: number; key: string;}[][];  key: string;}
      [...inputNeurons],
    ]
    
    // Loops over all elements in hiddenLayers: Makes each hidden layer
    for (let i = 0; i < hiddenLayers.length; i++) {

      const hiddenLayer = []

      // Loops over the numbers in hiddenlayers: Makecs an element for each neuron
      for (let j = 0; j < hiddenLayers[i]; j++) {
          
        const connections = []
        let weightedSum = 0;

        // Loops over the previous neurons: Makes connections & calculates weighted sum for neuron
        for (let k = 0; k < LayerNeurons[i].length; k++) {

            const connectedNeuronWeight = Math.random() / 1.5
            const connectedNeuronValue = LayerNeurons[i][k].value

            // Adds a connection to the connections array
            connections.push({value: connectedNeuronValue, weight: connectedNeuronWeight, key: LayerNeurons[i][k].key})

            // Adds to the weighted sum to get the value
            weightedSum += connectedNeuronWeight * connectedNeuronValue
        }

        const bias = Math.random()

        hiddenLayer.push({value: weightedSum - bias,  bias: bias, connections: connections, key: createUniqueKey()})
        
      }
    
      LayerNeurons.push(hiddenLayer)
    }

    return LayerNeurons
  }


  let layers = createLayers(inputs, hiddenLayers);
console.log(layers)
  // Gets the highest value to color the neurons relatively
  let highestValue = 0;

  layers.forEach((layer: Neuron[]) => {
    layer.forEach((neuron: Neuron) => {
      if (neuron.value > highestValue) highestValue = neuron.value; 
    })
  })

  // Makes array that contains the same input the amount of times it says in layers[0]
  // for (let i = 0; i < layers[0]; i+)
  // const inputs = Array(layers[0]).fill({value: 50, connections: [{weight: 0.5, bias: 10},{weight: 0.5, bias: 10},{weight: 0.5, bias: 10}]})
  

  // for (let i = 0; i < layers[1]; i++) {
  //   return {value: input}
  // }

  // const [layers, setLayers] = useState([
  //   [
  //     {
  //       key: createUniqueKey(),
  //       value: 30,
  //       bias: -10,
  //       connections: [
  //         { value: 0, weight: 0.5 },
  //         { value: 50, weight: 0.5 },
  //         { value: 50, weight: 0.5 },
  //       ],
  //     },
  //     {
  //       key: createUniqueKey(),
  //       value: 50,
  //       bias: -10,
  //       connections: [
  //         { value: 50, weight: 0.5 },
  //         { value: 50, weight: 0.5 },
  //         { value: 50, weight: 0.5 },
  //       ],
  //     },
  //     {
  //       key: createUniqueKey(),
  //       value: 50,
  //       bias: -10,
  //       connections: [
  //         { value: 50, weight: 0.5 },
  //         { value: 50, weight: 0.5 },
  //         { value: 50, weight: 0.5 },
  //       ],
  //     },
  //   ],
  // ]);

  // const updateValue = (key: string, newValue: number) => {
  //   let newLayers = [...layers];
  //   let index: { layer: null | number; index: null | number } = {
  //     layer: null,
  //     index: null,
  //   };

  //   // Finds index of neuron and puts it in the index object
  //   for (let i = 0; i < newLayers.length; i++) {
  //     if (newLayers[i].findIndex((neuron) => neuron.key === key)) {
  //       index = {
  //         layer: i,
  //         index: newLayers[i].findIndex((neuron) => neuron.key === key),
  //       };
  //     }
  //   }

    // Updates the value
  //   if (index.layer !== null && index.index !== null) {
  //     newLayers[index.layer][index.index].value = newValue;
  //   }

  //   setLayers([...newLayers]);
  // };

      // {/* {layers.map((layer, index) => {
      //   return (
      //     <div
      //       className="flex"
      //       key={createUniqueKey()}
      //     >
      //       <Layer updateValue={updateValue} neurons={layer} />
      //       <ConnectionLayer
      //         neuronsA={layer}
      //         neuronsB={layers[index + 1] ? layers[index + 1] : []}
      //       />
      //     </div>
      //   );
      // })} */}

  return (
    <div className="flex">
      {layers.map((layer: any, index: number) => {

        return (
          <Layer neurons={layer} type={index === 0 ? "input" : "hidden"} highestValue={highestValue} />
        )
      })}
    </div>
  );

};

export default Network;
