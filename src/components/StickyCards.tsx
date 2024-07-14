import React from 'react'

const StickyCards = ({title, description, color}) => {
  return (
    <div className='h-[150vh] sticky top-0'>
        <div style={{
            backgroundColor: color
        }} className='h-[100vh]'>
            <p>{title}</p>
        </div>
    </div>
  )
}

export default StickyCards