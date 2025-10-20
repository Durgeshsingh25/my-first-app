import React from 'react'

const Button = (props) => {
  return (
    <button className='p-2 border border-slate-500 rounded-2xl bg-slate-200' onClick={props.update}>Click here</button>
  )
}

export default Button
