import React from 'react'

const ButtonCount = (props) => {

  return (
    <div className='rounded-3xl border-red-300 bg-amber-300 h-20 w-20 flex text-center justify-center items-center'>
      {props.count}
    </div>
  )
}

export default ButtonCount
