import React, { useState } from 'react'
import './style.css'
import ProgressBar from './ProgressBar'

// Que-1 - Implement a progress bar component which shows the completion progress by filling 
// the bar proportionately to the progress (a number between 0-100, inclusive)
// The completion % is shown in the center of the filled bar.
// Add the accessibility features like ARIA attributes to the progress bar.

// Que-2 - Build an app where clicking the "Add" button adds progress bars to the page.
//  The progress bars fill up gradually smoothly as soon as they are shown.
// Each bar takes approximately 2000ms to completely fill up.

// Que-3 - The progress bars fill up gradually in sequence, one at a time. i.e. 
// the second progress bar will only starts filling up after the first progress bar is 
// completely filled up.

// Que-4 - In this question, we'll build progress bars where multiple of them are filling 
// up concurrently, up to a limit of 3. 
// The fourth progress bar only starts filling up after the third one is full.

// Que-5 - Implement the following buttons with the functionality: 
// Start/Pause: Starts/pauses the filling up of the progress bars. The button label turns 
// into "Pause" when the animation is playing.
// Add: Appends a new progress bar to the bottom of the list.
// Reset: Resets to the initial state where there is only one empty bar and stops any 
// running animation
const CONCURRENCY_LIMIT = 3;
const INITIAL_PROGRESSION = [0]; // single bar with 0 progress

export default function App() {
  const [progression, setProgression] = useState(INITIAL_PROGRESSION);
  // [50, 40, 90, 100, 0, 80]
  const [timerId, setTimerId] = useState(null);

  // Assume 60 Hz monitor = 60 FPS = 60 frames/images per second = 60 per 1000ms = 16.66 ms
  // atleast less than 16 ms interval me update the progress bar = smooth animation
  // requestAnimationFrame - auto match monitor FPS
  const start = () => {
    const timer = window.setInterval(() => {
      setProgression((currProgression) => {
        // finding out the no of non full bars 
        const nonFullBars = currProgression
          .map((value, index) => ({ value, index }))
          .filter(({ value }) => value < 100);

        // if all already full then nothing to do
        if (nonFullBars.length === 0) {
          return currProgression;
        }
        // pick concurrent ones from non full bars 
        const barsToIncrement = nonFullBars.slice(0, CONCURRENCY_LIMIT);

        // just a copy of currProgression - avoid mutations
        const newProgression = currProgression.slice();

        for (const { index } of barsToIncrement) {
          newProgression[index] = newProgression[index] + 0.5;
          // 2000ms - 0 to 100 = total time/interval time 
          // 2000 ms/10 ms = 200 steps in 100 = 0.5
          // Assume: 4000 ms / 15 ms = 266 steps in 100 = 0.37
        }
        return newProgression;
      });
    }, 10);

    setTimerId(timer);
  }

  const pause = () => {
    window.clearInterval(timerId);
    setTimerId(null);
  }

  const reset = () => {
    pause();
    setProgression(INITIAL_PROGRESSION);
  }

  const addBars = () => {
    setProgression(progression.concat(0))
  }

  const isProgressing = timerId !== null;


  return (
    <div>
      <h1>Progress Bars</h1>
      <div className='buttons'>
        <button onClick={() => { addBars(); }}>
          Add
        </button>
        <button onClick={() => { isProgressing ? pause() : start() }}>
          {isProgressing ? "Pause" : "Start"}
        </button>
        <button onClick={() => { reset(); }}>
          Reset
        </button>
      </div>
      <div>
        {progression
          .map((value, idx) =>
            <ProgressBar
              key={idx}
              animationProgress={value}
            />
          )}
      </div>
    </div>
  )
}
