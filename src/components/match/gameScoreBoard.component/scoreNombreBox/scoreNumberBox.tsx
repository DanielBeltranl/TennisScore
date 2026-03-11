import { motion } from "framer-motion";

interface ScorePorps {
    score: string
    className?: string
    borderStyle? : string

}

const scoreStyles = "w-[clamp(150px,20vw,300px)] aspect-square text-[clamp(70px,12vw,210px)] font-bold flex items-center justify-center";



export default function ScoreNumberBox({ score, borderStyle }: ScorePorps) {
    return (
        <motion.div
            // Animamos propiedades basadas directamente en si hay un estilo de borde activo
            animate={{
                // Si borderStyle tiene valor, "encendemos" el resplandor, si no, lo "apagamos"
                boxShadow: borderStyle?.includes("amber")
                    ? "0px 0px 20px rgba(251, 191, 36, 0.4)"
                    : "0px 0px 0px rgba(255, 255, 255, 0)",
                borderColor: borderStyle?.includes("amber")
                    ? "rgba(251, 191, 36, 1)"
                    : "rgba(255, 255, 255, 0.2)"
            }}
            transition={{
                duration: 0.8, // Controla la velocidad de "encendido" y "apagado" lento
                ease: "easeInOut"
            }}
            className={`flex items-center justify-center p-2 bg-purple-900 border-4 rounded-xl text-white ${borderStyle}`}
        >
            <span className={`leading-none font-bold flex items-center justify-center relative z-10 ${scoreStyles}`}>
                {score}
            </span>
        </motion.div>
    );
}

