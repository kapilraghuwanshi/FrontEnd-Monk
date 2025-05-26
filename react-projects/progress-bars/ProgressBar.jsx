
export default function ProgressBar({ completionStatus = 0 }) {
    const MIN = 0;
    const MAX = 100;

    // handle negative and >100 values
    const clampedValue = Math.min(Math.max(completionStatus, MIN), MAX);

    return (
        <div className="bar">
            <div className="progress-bar"
                style={{ width: clampedValue + '%' }}
                role="progressbar"
                aria-valuenow={clampedValue}
                aria-valuemin={MIN}
                aria-valuemax={MAX}>
                {clampedValue ? clampedValue + "%" : ""}
            </div>
        </div>
    );
}