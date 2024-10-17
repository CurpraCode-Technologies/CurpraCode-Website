'use client';
import { useEffect, useState, useRef } from 'react';
import styles from '@/app/home.module.css';
import { motion, useMotionValue, useSpring, transform, animate } from 'framer-motion';

interface StickyProps {
    stickyElement: React.RefObject<HTMLElement>;
}

const Sticky: React.FC<StickyProps> = ({ stickyElement }) => {
    const [isHovered, setIsHovered] = useState<boolean>(false);
    const cursor = useRef<HTMLDivElement | null>(null);
    const [cursorSize, setCursorSize] = useState<number>(15); // Use state for cursor size

    const mouse = {
        x: useMotionValue(0),
        y: useMotionValue(0)
    }

    const scale = {
        x: useMotionValue(1),
        y: useMotionValue(1)
    }

    // Smooth out the mouse values
    const smoothOptions = { damping: 25, stiffness: 700, mass: 0.5 };
    const smoothMouse = {
        x: useSpring(mouse.x, smoothOptions),
        y: useSpring(mouse.y, smoothOptions)
    }

    const rotate = (distance: { x: number; y: number }) => {
        const angle = Math.atan2(distance.y, distance.x);
        if (cursor.current) { // Check if cursor.current is not null
            animate(cursor.current, { rotate: `${angle}rad` }, { duration: 0 });
        }
    }

    const manageMouseMove = (e: MouseEvent) => {
        const { clientX, clientY } = e;
        const { left, top, height, width } = stickyElement.current!.getBoundingClientRect();

        // Center position of the stickyElement
        const center = { x: left + width / 2, y: top + height / 2 }

        // Move custom cursor to the mouse position
        mouse.x.set(clientX - cursorSize / 2);
        mouse.y.set(clientY - cursorSize / 2);

        if (isHovered) {
            const distance = { x: clientX - center.x, y: clientY - center.y }

            // Rotate
            rotate(distance)

            // Stretch based on the distance
            const absDistance = Math.max(Math.abs(distance.x), Math.abs(distance.y));
            const newScaleX = transform(absDistance, [0, height / 2], [1, 1.3]);
            const newScaleY = transform(absDistance, [0, width / 2], [1, 0.8]);
            scale.x.set(newScaleX);
            scale.y.set(newScaleY);
        }
    }

    // New function to handle link hover
    const manageLinkHover = (e: MouseEvent) => {
        const target = e.target as HTMLElement;
        if (target.tagName === 'A') {
            setCursorSize(30);
            scale.x.set(1.5);
            scale.y.set(1.5);
        } else {
            setCursorSize(isHovered ? 60 : 15);
            scale.x.set(1);
            scale.y.set(1);
        }
    }

    // Update color based on background
    // const updateCursorColor = (e: MouseEvent) => {
    //     const target = e.target as HTMLElement;
    //     const backgroundColor = window.getComputedStyle(target).backgroundColor;
    //     const rgb = backgroundColor.match(/\d+/g);
    //     if (rgb) {
    //         const brightness = (parseInt(rgb[0]) * 0.299 + parseInt(rgb[1]) * 0.587 + parseInt(rgb[2]) * 0.114);
    //         if (brightness < 128) {
    //             cursor.current!.style.backgroundColor = '#fff'; // Dark background
    //         } else {
    //             cursor.current!.style.backgroundColor = 'black'; // Light background
    //         }
    //     }
    // }

    const manageMouseOver = () => {
        setIsHovered(true);
    }

    const manageMouseLeave = () => {
        setIsHovered(false);
        if (cursor.current) {
            animate(cursor.current, { scaleX: 1, scaleY: 1 }, { duration: 0.1 });
        }
    }

    useEffect(() => {
        const element = stickyElement.current;
        if (element) {
            element.addEventListener("mouseenter", manageMouseOver);
            element.addEventListener("mouseleave", manageMouseLeave);
            window.addEventListener("mousemove", manageMouseMove);
            // window.addEventListener("mouseover", updateCursorColor); // Update color on mouse over
            window.addEventListener("mouseover", manageLinkHover);
            return () => {
                element.removeEventListener("mouseenter", manageMouseOver);
                element.removeEventListener("mouseleave", manageMouseLeave);
                window.removeEventListener("mousemove", manageMouseMove);
                // window.removeEventListener("mouseover", updateCursorColor);
                window.removeEventListener("mouseover", manageLinkHover);
            }
        }
    }, [isHovered, stickyElement]);

    const template = ({ rotate, scaleX, scaleY }: { rotate: string; scaleX: number; scaleY: number }) => {
        return `rotate(${rotate}) scaleX(${scaleX}) scaleY(${scaleY})`;
    }

    return (
        <div className={styles.cursorContainer} style={{ position: 'absolute', zIndex: 1000 }}>
            <motion.div
                transformTemplate={template}
                style={{
                    left: smoothMouse.x,
                    top: smoothMouse.y,
                    scaleX: scale.x,
                    scaleY: scale.y,

                }}
                animate={{
                    width: cursorSize,
                    height: cursorSize
                }}
                className={styles.cursor}
                ref={cursor}>
            </motion.div>
        </div>
    )
}

export default Sticky;
