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

export default function App() {

  return (
    <div>
      <h1>Progress Bars</h1>
      <ProgressBar />
      <ProgressBar completionStatus={25}/>
      <ProgressBar completionStatus={50}/>
      <ProgressBar completionStatus={75}/>
      <ProgressBar completionStatus={100}/>
      <ProgressBar completionStatus={150}/>
      <ProgressBar completionStatus={-20}/>
      <ProgressBar completionStatus={2}/>
    </div>
  )
}
