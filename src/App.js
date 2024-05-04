import logo from './logo.svg';
import './App.css';
import {Canvas} from "@react-three/fiber"
import { Suspense } from 'react';
import {Earth} from "./Components/Earth"

function App() {
  return (
    <Canvas id='canvas-container'>
      <Suspense fallback = {null}>
        <Earth/>
      </Suspense>
    </Canvas>
  );
}

export default App;
