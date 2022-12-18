import { url } from 'inspector';
import React from 'react'
import './Connection.css'

type Props = {
  // position: {x1: number; }
  color: string;
  weight: number;
  key: string;
}

const Connection = (props: Props) => {
  return (
      <div className='connection' key={Math.random().toString() + Math.random().toString()}>
          <svg fill="#FFF" height="400" width="360">
      <defs>
          <marker id={props.key} markerWidth="13" markerHeight="13" refX="2" refY="6" orient="auto">
          </marker>
      </defs>
      <line x1="0" y1="0" x2="180" y2="140" style={{ stroke: props.color, strokeWidth: props.weight * 20, markerEnd: "url(#a" + props.key}} className="connectionArrow" />
    </svg>
  
    </div>
  )
}

export default Connection