import React from 'react';
import ReactDOM from 'react-dom/client';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { MotionPathPlugin } from 'gsap/MotionPathPlugin';

// Register GSAP plugins once, globally, before the React tree mounts
gsap.registerPlugin(ScrollTrigger, MotionPathPlugin);

// Styles: globals → animations → component classes
import '@/styles/globals.css';
import '@/styles/animations.css';
import '@/styles/components.css';

import App from './App';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
