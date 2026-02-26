"use client";

import { useEffect, useRef, useState } from "react";

const videos = [
	"https://assets.mixkit.co/videos/47755/47755-720.mp4",
	"https://assets.mixkit.co/videos/17675/17675-720.mp4",
	"https://assets.mixkit.co/videos/4613/4613-720.mp4",
	"https://assets.mixkit.co/videos/2728/2728-720.mp4",
];

const SLIDE_DURATION = 8000; // ms per video
const FADE_DURATION = 1500;  // ms crossfade

export default function HeroVideoSlider() {
	const [currentIndex, setCurrentIndex] = useState(0);
	const [nextIndex, setNextIndex] = useState(1);
	const [fading, setFading] = useState(false);
	const [progress, setProgress] = useState(0);

	const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
	const fadeTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
	const progressIntervalRef = useRef<ReturnType<typeof setInterval> | null>(null);
	const startTimeRef = useRef<number>(Date.now());

	const clearAll = () => {
		if (timerRef.current) clearTimeout(timerRef.current);
		if (fadeTimerRef.current) clearTimeout(fadeTimerRef.current);
		if (progressIntervalRef.current) clearInterval(progressIntervalRef.current);
	};

	const startCycle = (idx: number) => {
		clearAll();
		startTimeRef.current = Date.now();
		setProgress(0);

		// Progress bar
		progressIntervalRef.current = setInterval(() => {
			const elapsed = Date.now() - startTimeRef.current;
			setProgress(Math.min(elapsed / SLIDE_DURATION, 1));
		}, 50);

		// Start fade before the slide ends
		timerRef.current = setTimeout(() => {
			const next = (idx + 1) % videos.length;
			setNextIndex(next);
			setFading(true);

			fadeTimerRef.current = setTimeout(() => {
				setCurrentIndex(next);
				setFading(false);
				startCycle(next);
			}, FADE_DURATION);
		}, SLIDE_DURATION - FADE_DURATION);
	};

	useEffect(() => {
		setNextIndex(1);
		startCycle(0);
		return () => clearAll();
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	return (
		<div className="absolute inset-0 overflow-hidden">
			{/* Current video */}
			<video
				key={`current-${currentIndex}`}
				autoPlay
				muted
				loop
				playsInline
				className="absolute inset-0 w-full h-full object-cover transition-opacity"
				style={{
					opacity: fading ? 0 : 1,
					transitionDuration: `${FADE_DURATION}ms`,
				}}
			>
				<source src={videos[currentIndex]} type="video/mp4" />
			</video>

			{/* Next video (preloaded, fades in) */}
			<video
				key={`next-${nextIndex}`}
				autoPlay
				muted
				loop
				playsInline
				className="absolute inset-0 w-full h-full object-cover transition-opacity"
				style={{
					opacity: fading ? 1 : 0,
					transitionDuration: `${FADE_DURATION}ms`,
				}}
			>
				<source src={videos[nextIndex]} type="video/mp4" />
			</video>

			{/* Slide indicators */}
			<div className="absolute bottom-16 left-1/2 -translate-x-1/2 flex items-center gap-2 z-20">
				{videos.map((_, i) => (
					<div
						key={i}
						className="h-0.5 rounded-full overflow-hidden bg-white/25 transition-all duration-300"
						style={{ width: i === currentIndex ? "40px" : "16px" }}
					>
						{i === currentIndex && (
							<div
								className="h-full bg-white rounded-full origin-left"
								style={{
									transform: `scaleX(${progress})`,
									transition: "transform 0.05s linear",
								}}
							/>
						)}
					</div>
				))}
			</div>
		</div>
	);
}
