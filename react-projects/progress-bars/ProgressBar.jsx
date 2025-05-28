export default function ProgressBar({ animationProgress }) {
    return (
        <div className="bar">
            <div className="progress-bar"
                style={{
                    // width: animationProgress + "%"
                    // transform: `translateX(${animationProgress-100}%)`
                    transform: `scaleX(${animationProgress / 100})`,
                    transformOrigin: 'left'
                }}
            >
            </div>
        </div>
    )
}