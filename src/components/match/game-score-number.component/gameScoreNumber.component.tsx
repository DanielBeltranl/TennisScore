
interface ScorePorps {
    score: string
    className?: string
}

const scoreStyles = "w-[clamp(150px,20vw,300px)] aspect-square text-[clamp(70px,12vw,210px)] font-bold flex items-center justify-center";

export default function GameScoreNumberComponent ({ score }: ScorePorps) {
    return (
        <div className="flex items-center justify-center p-2 bg-purple-900 border-8 border-white rounded-2xl text-white">
            <span className={` leading-none font-bold flex items-center justify-center relative z-10 ${scoreStyles}`}>
                {score}
            </span>
        </div>
    )



}

