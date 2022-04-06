import './App.css';
import React, { useRef} from 'react';
import useElementOnScreen from './useElementOnScreen.js';


function App() {
  const targetRef = useRef(null);
  const isVisible = useElementOnScreen({
    root:null,
    rootMargin:'0px',
    threshold:0.3
  }, targetRef)



  return (
    <>
      <h1 className='header'><p>{!isVisible? 'not in viewport':'in viewport'}</p></h1>
      <div className='gap'></div>
      <img alt='una imagen linda' src='https://cdn.pixabay.com/photo/2019/12/01/18/04/hairdresser-4666064_960_720.jpg' ref={targetRef}/>
    </>
  );
}

export default App;
