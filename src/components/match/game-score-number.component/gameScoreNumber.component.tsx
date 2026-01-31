
interface ScorePorps {
    score: string
    className?: string
}

export default function GameScoreNumberComponent ({ score, className }: ScorePorps) {
    return (
        <div className="flex items-center justify-center p-2 bg-purple-900 border-8 border-white rounded-2xl text-white">
            <span className={` leading-none font-bold flex items-center justify-center relative z-10 ${className}`}>
                {score}
            </span>
        </div>
    )



}

