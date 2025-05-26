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

export default function App() {
  const [countProgressBars, setCountProgressBars] = useState(0);
  const [numFilledBars, setNumFilledBars] = useState(0);

  const addProgressBars = () => {
    setCountProgressBars((prevCount) => prevCount + 1);
  }

  return (
    <div>
      <h1>Progress Bars</h1>
      <button onClick={() => addProgressBars()}>Add</button>
      <div>
        {Array(countProgressBars)
          .fill(null)
          .map((value, idx) =>
            <ProgressBar
              key={idx}
              isEmpty={idx >= numFilledBars + CONCURRENCY_LIMIT} // true - do not animate since it's empty 
              onCompleted={() => { 
                setNumFilledBars(numFilledBars + 1) 
              }} /> // increment once animation is completed for earlier one
          )}
      </div>
    </div>
  )
}
