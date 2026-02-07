import type {ButtomProps} from "../score-interfaces/buttom-props.ts";
import { motion } from "framer-motion";


export const GameEnderButtom = ({ onClick, string }: ButtomProps) => {

    // Definimos las dimensiones y escala (Mobile-First)
    const sizeClasses = "w-[clamp(130px,10vw,280px)] h-[clamp(40px,5vw,80px)]";
    const textClasses = "text-[clamp(0.8rem,1.5vw,1.0rem)] font-bold uppercase";
    const buttonAnimation = {
        initial: { opacity: 0, scale: 1, y: 15 },
        animate: { opacity: 1, scale: 1, y: 0 },
        transition: { stiffness: 500 },
        whileHover: { scale: 1.05 },
        whileTap: { scale: 0.95 }
    };


    // Definimos la estética y estados (Hover/Active)
    const visualClasses = `
        bg-amber-50 border-1 border-black rounded-lg
        shadow-md hover:shadow-lg
        flex items-center justify-center
        transition-all duration-200
        hover:-translate-y-1 active:translate-y-0
    `;

    return (
        <motion.button
            {...buttonAnimation}
            onClick={onClick}
            className={`${sizeClasses} ${textClasses} ${visualClasses} `}
        >
            {string}
        </motion.button>
    );
};