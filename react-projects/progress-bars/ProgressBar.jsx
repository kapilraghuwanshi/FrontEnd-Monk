export default function ProgressBar({ animationProgress }) {
    const MIN = 0;
    const MAX = 100;
    return (
        <div className="bar">
            <section
                className="progress-bar"
                role="progressbar"
                aria-valuenow={Math.floor(animationProgress)}
                aria-valuemin={MIN}
                aria-valuemax={MAX}
                //aria-label={label}
                style={{
                    // width: animationProgress + "%"
                    // transform: `translateX(${animationProgress-100}%)`
                    transform: `scaleX(${animationProgress / 100})`,
                    transformOrigin: 'left'
                }}
            >
            </section>
        </div>
    )
}