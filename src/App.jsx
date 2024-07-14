import './App.css'
import AnimationControls from './components/AnimationControls'
import BasicMotion from './components/BasicMotion'
import Gestures from './components/Gestures'
import ScrollAnimations from './components/ScrollAnimations'
import StickyCards from './components/StickyCards'
import { TextParallax } from './components/TextParallax'
import ViewBasedAnimations from './components/ViewBasedAnimations'
import { products } from './products'
function App() {

  return (
    <div className='mt-[50vh]'>
      {/* <BasicMotion /> */}
      {/* <Gestures /> */}
      {/* <AnimationControls /> */}
      {/* <ViewBasedAnimations /> */}
      {/* <ScrollAnimations /> */}
      {/* <TextParallax /> */}
      {products.map((product, index) => {
        return <StickyCards key={index} {...product}/>
      })}
    </div>
  )
}

export default App
