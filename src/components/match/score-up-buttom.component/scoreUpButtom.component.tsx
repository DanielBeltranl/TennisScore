
export default function ScoreUpButtomComponent ({ onClick }: { onClick: () => void }) {
    return (
        <button
            onClick={onClick}
            className="w-[100px] h-[106px] p-2 bg-white border border-black rounded hover:bg-gray-100 hover:-translate-y-1 active:translate-y-0 transition-all duration-200 flex items-center justify-center shadow-md hover:shadow-lg"
        >
            <svg
                className="w-16 h-16 "
                fill="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path d="M7.41 15.41L12 10.83l4.59 4.58L18 14l-6-6-6 6z" />
            </svg>
        </button>
    )
}