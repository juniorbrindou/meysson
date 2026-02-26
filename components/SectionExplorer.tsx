"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { Link } from "@/i18n/navigation";
import { ArrowRight } from "lucide-react";

interface ExpertiseItem {
	title: string;
	description: string;
	href: string;
	image: string;
	tags: string[];
}

interface SectionExplorerProps {
	items: ExpertiseItem[];
}

export default function SectionExplorer({ items }: SectionExplorerProps) {
	const containerRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		const container = containerRef.current;
		if (!container) return;

		const observer = new IntersectionObserver(
			(entries) => {
				entries.forEach((entry) => {
					if (entry.isIntersecting) {
						entry.target.setAttribute("data-visible", "true");
						observer.unobserve(entry.target);
					}
				});
			},
			{ threshold: 0.08, rootMargin: "-60px 0px 0px 0px" }
		);

		const rows = container.querySelectorAll(".expertise-row");
		rows.forEach((row) => observer.observe(row));

		return () => observer.disconnect();
	}, []);

	return (
		<div ref={containerRef}>
			{items.map((item, index) => {
				// Alternate layout: even = image-left/content-right, odd = content-left/image-right
				const isReversed = index % 2 !== 0;

				return (
					<div
						key={item.href}
						className="expertise-row group/row relative w-full min-h-screen flex overflow-hidden"
					>
						{/* ── Image panel — full bleed on all screens ── */}
						<div className="expertise-panel-image absolute inset-0">
							<Image
								src={item.image}
								alt={item.title}
								fill
								className="object-cover transition-transform duration-700 group-hover/row:scale-105"
								sizes="(max-width: 768px) 100vw, 55vw"
							/>
							{/* Mobile: gradient from bottom for text readability */}
							<div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-black/20 md:hidden" />
							{/* Desktop: gradient toward the content side */}
							<div
								className={`
                  absolute inset-0 hidden md:block
                  ${isReversed
										? "bg-gradient-to-r from-[#1a1a1a] via-[#1a1a1a]/80 to-transparent"
										: "bg-gradient-to-l from-[#1a1a1a] via-[#1a1a1a]/80 to-transparent"
									}
                `}
							/>
						</div>

						{/* ── Content panel ── */}
						<div
							className={`
                expertise-panel-content relative z-20 w-full md:w-[45%] min-h-[70vh] md:min-h-screen
                flex items-end md:items-center
                ${isReversed ? "md:mr-auto expertise-panel-slide-left" : "md:ml-auto expertise-panel-slide-right"}
                md:bg-[#1a1a1a]
              `}
						>
							<div
								className={`
                  px-6 pb-12 pt-40 md:px-12 lg:px-16 md:py-20 max-w-xl w-full
                  ${isReversed ? "md:ml-auto md:mr-8" : "md:mr-auto md:ml-8"}
                `}
							>
								{/* Number accent */}
								<span className="expertise-slide-item inline-block text-accent/30 text-[100px] font-black leading-none -mb-8 select-none">
									0{index + 1}
								</span>

								{/* Title */}
								<h2 className="expertise-slide-item text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight mb-4">
									{item.title}
								</h2>

								{/* Accent line */}
								<div className="expertise-slide-item w-16 h-1 bg-accent rounded-full mb-6 transition-all duration-500 group-hover/row:w-28" />

								{/* Description */}
								<p className="expertise-slide-item text-white/70 text-base md:text-lg leading-relaxed mb-8">
									{item.description}
								</p>

								{/* Tags */}
								<div className="expertise-slide-item flex flex-wrap gap-2 mb-8">
									{item.tags.map((tag) => (
										<span
											key={tag}
											className="text-xs font-medium text-accent bg-accent/10 border border-accent/20 px-3 py-1.5 rounded-full"
										>
											{tag}
										</span>
									))}
								</div>

								{/* CTA */}
								<Link
									href={item.href as "/expertises/ingenierie-energie" | "/expertises/raffinerie-maintenance" | "/expertises/telecoms-infrastructures"}
									className="expertise-slide-item group/btn inline-flex items-center gap-3 bg-accent hover:bg-accent/90 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 shadow-lg shadow-accent/20"
								>
									Explorer
									<ArrowRight size={18} className="group-hover/btn:translate-x-1 transition-transform" />
								</Link>
							</div>
						</div>
					</div>
				);
			})}
		</div>
	);
}
