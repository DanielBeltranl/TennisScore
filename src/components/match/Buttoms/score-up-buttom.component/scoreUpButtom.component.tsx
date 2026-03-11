import type {ButtomProps} from "../../score-interfaces/buttom-props.ts";



const buttonStyles = "w-[clamp(41px,5vw,82px)] aspect-square";

export default function ScoreUpButtomComponent ({ onClick}: ButtomProps) {
    return (
        <button
            onClick={onClick}
            className={`${buttonStyles} bg-white border border-black rounded hover:bg-gray-100 hover:-translate-y-1 active:translate-y-0 transition-all duration-200 flex items-center justify-center shadow-md hover:shadow-lg`}
        >
            <svg
                className="w-[80%] h-[80%]"
                fill="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path d="M7.41 15.41L12 10.83l4.59 4.58L18 14l-6-6-6 6z" />
            </svg>
        </button>
    )
}