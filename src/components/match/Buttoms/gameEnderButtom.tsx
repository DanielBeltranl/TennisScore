import type {ButtomProps} from "../score-interfaces/buttom-props.ts";
import { motion } from "framer-motion";
import type {HTMLMotionProps} from "framer-motion";

export const GameEnderButtom = ({ onClick, string }: ButtomProps) => {

    const sizeClasses = "w-[clamp(130px,10vw,280px)] h-[clamp(30px,5vw,60px)]";
    const textClasses = "text-[clamp(0.8rem,1.5vw,1.0rem)] font-bold uppercase";

    // ELIMINADAS: transition-all, hover:-translate-y-1 y active:translate-y-0
    // Estas clases rompen la ejecución de Framer Motion
    const visualClasses = `
        bg-amber-50 border-2 border-black rounded-lg
        shadow-md hover:shadow-lg
        flex items-center justify-center
        text-black
    `;

    const buttonAnimation: HTMLMotionProps<"button"> = {
        initial: {
            opacity: 0,
            scale: 0.5,
            filter: "blur(4px)"
        },
        animate: {
            opacity: 1,
            scale: 1,
            filter: "blur(0px)"
        },
        transition: {
            type: "spring",
            stiffness: 400,
            damping: 25
        },
        whileHover: {
            scale: 1.05,
            y: -4 // Esto reemplaza el hover:-translate-y-1 de Tailwind
        },
        whileTap: {
            scale: 0.95,
            y: 0  // Esto reemplaza el active:translate-y-0
        }
    };

    return (
        <motion.button
            {...buttonAnimation}
            onClick={onClick}
            className={`${sizeClasses} ${textClasses} ${visualClasses}`}
        >
            {string}
        </motion.button>
    );
};