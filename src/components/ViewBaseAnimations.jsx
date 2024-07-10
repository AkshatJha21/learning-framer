import React from 'react'
import { motion } from 'framer-motion'

const ViewBaseAnimations = () => {
  return (
    <>
        <div style={{ height: "150vh" }}/>
        <motion.div 
            style={{ height: '100vh', background: 'black' }}
        />
    </>
  )
}

export default ViewBaseAnimations