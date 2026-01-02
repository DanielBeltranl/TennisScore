

export default function GameScoreNumberComponent ({ score }: { score: number }) {
    return (
        <div className="flex items-center justify-center w-[421px] h-[405px] p-2 bg-purple-900 border-[10px] border-white rounded-2xl text-white">
            <span className="text-[280px] leading-none font-bold flex items-center justify-center relative z-10">
                {score}
            </span>
        </div>
    )



}

