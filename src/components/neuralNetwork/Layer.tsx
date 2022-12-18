import React from 'react'
import Neuron from './Neuron';

type Props = {
    neurons: {key: string; value: number; bias: number; connections: { value: number; weight: number; key: string;}[]; }[];
}

const Layer = (props: Props) => {
  return (
    <div>
        {props.neurons.map((neuron) => {
            return (
                <div key={Math.random().toString() + Math.random().toString()}>
                    <Neuron properties={neuron} />
                </div>
            )
        })}
    </div>
  )
}

export default Layer