
import { useEffect, useState, useRef, useContext } from 'react'
import { motion } from 'framer-motion';
import { CursorContext } from '../../lib/context';


export function CustomCursor() {

	const [mousePosition] = useState({
		x: 0,
		y: 0,
	})
	const cursorRef = useRef(null);
	const { isHoveringLink, isHoveringText, } = useContext(CursorContext);

	useEffect(() => {
		const updateCursor = (e) => {
			const cursor = cursorRef.current;
			cursor.style.top = `${e.clientY}px`;
			cursor.style.left = `${e.clientX}px`;
		};
		window.addEventListener('mousemove', updateCursor);
		return () => {
			window.removeEventListener('mousemove', updateCursor);
		};
	}, []);

	const mouseCondition = {
		default: {
			width: 32,
			height: 32,
			x: mousePosition.x - 16,
			y: mousePosition.y - 16,
		},
		// linkHover: {
		// 	width: 44,
		// 	height: 44,
		// 	x: mousePosition.x - 22,
		// 	y: mousePosition.y - 22,
		// 	backgroundColor: isHoveringLink ? "transparent" : "default",
		// 	border: isHoveringLink ? "4px solid #B63E96" : "2px solid transparent",
		// 	transition: {
		// 		backgroundColor: {
		// 			duration: isHoveringLink ? 0 : 0.3
		// 		},
		// 		border: {
		// 			duration: isHoveringLink ? 0 : 0.3
		// 		}
		// 	}
		// },
		linkHover: {
			width: 44,
			height: 44,
			x: mousePosition.x - 22,
			y: mousePosition.y - 22,
			backgroundColor: isHoveringLink ? "#f5f5f5" : "default",
			border: isHoveringLink ? "4px solid #f5f5f5" : "2px solid transparent",
			mixBlendMode: "difference",
			transition: {
				backgroundColor: {
					duration: isHoveringLink ? 0 : 0.3
				},
				border: {
					duration: isHoveringLink ? 0 : 0.3
				},
			}
		},
		textHover: {
			width: 150,
			height: 150,
			x: mousePosition.x - 75,
			y: mousePosition.y - 75,
			backgroundColor: isHoveringText ? "#f5f5f5" : "default",
			border: isHoveringText ? "4px solid #f5f5f5" : "2px solid transparent",
			mixBlendMode: "difference",
			transition: {
				backgroundColor: {
					duration: isHoveringText ? 0 : 0.3
				},
				border: {
					duration: isHoveringText ? 0 : 0.3
				},
			}
		}
	};

	let cursorVariant;
	if (isHoveringText) {
		cursorVariant = "textHover";
	} else if (isHoveringLink) {
		cursorVariant = "linkHover";
	} else {
		cursorVariant = "default";
	}

	return (
		<motion.div
			ref={cursorRef}
			variants={mouseCondition}
			animate={cursorVariant}
			className='z-[1000] lg:hidden h-8 w-8 bg-primary border-2 border-solid border-transparent rounded-full fixed top-0 left-0 pointer-events-none' />
	)
}

