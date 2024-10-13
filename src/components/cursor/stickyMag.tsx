import { useRef, useState, ReactNode } from 'react'
import { motion } from 'framer-motion';

interface FramerProps {
    children: ReactNode; // Define the type for children prop
}

export default function StickyMag({ children }: FramerProps) { // Use the defined interface for props
    const ref = useRef<HTMLDivElement | null>(null); // Specify the type for ref
    const [position, setPosition] = useState<{ x: number; y: number }>({ x: 0, y: 0 }); // Define the state type

    const handleMouse = (e: React.MouseEvent<HTMLDivElement>) => { // Specify the event type
        const { clientX, clientY } = e;
        const { height, width, left, top } = ref.current!.getBoundingClientRect(); // Use non-null assertion
        const middleX = clientX - (left + width / 2);
        const middleY = clientY - (top + height / 2);
        setPosition({ x: middleX * 0.1, y: middleY * 0.1 });
    }

    const reset = () => {
        setPosition({ x: 0, y: 0 });
    }

    const { x, y } = position;
    return (
        <motion.div
            style={{ position: "relative" }}
            ref={ref}
            onMouseMove={handleMouse}
            onMouseLeave={reset}
            animate={{ x, y }}
            transition={{ type: "spring", stiffness: 350, damping: 5, mass: 0.5 }}
        >
            {children}
        </motion.div>
    )
}
