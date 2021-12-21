import React, { ReactNode } from 'react'

export interface ButtonProps  { 
   children: ReactNode
}

const Button = (props: ButtonProps) => (
   <button>
     {props.children}
   </button>
);


export {Button}
