import { useEffect, useState } from "react"

export default function ProgressBar({ isEmpty, onCompleted }) {

    // width vs translateX vs ScaleX

    // render phases - layout(reflow), paint, composite, animation 

    const [animationProgress, setAnimationprogress] = useState(0);

    useEffect(() => {
        // setTimeout(() => setAnimationprogress(100));
        if (!isEmpty) {
            setAnimationprogress(100);
        }
    }, [isEmpty])
    // isEmpty change will re trigger the useEffect

    return (
        <div className="bar">
            <div className="progress-bar"
                style={{
                    // width: animationProgress + "%"
                    // transform: `translateX(${animationProgress-100}%)`
                    transform: `scaleX(${animationProgress / 100})`,
                    transformOrigin: 'left'
                }}
                onTransitionEnd={() => {
                    onCompleted();
                }}>
            </div>
        </div>
    )
}