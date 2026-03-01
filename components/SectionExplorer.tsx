"use client";

import Image from "next/image";
import { Link } from "@/i18n/navigation";
import { ArrowRight } from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollReveal";

interface ExpertiseItem {
	title: string;
	description: string;
	href: string;
	image: string;
	tags: string[];
	ctaLabel: string;
}

interface SectionExplorerProps {
	items: ExpertiseItem[];
}

export default function SectionExplorer({ items }: SectionExplorerProps) {
	const containerRef = useScrollReveal(".expertise-row", {
		threshold: 0.08,
		rootMargin: "-60px 0px 0px 0px",
	});

	return (
		<div ref={containerRef}>
			{items.map((item, index) => {
				const isReversed = index % 2 !== 0;

				return (
					<div
						key={item.href}
						className={`expertise-row group/row flex flex-col md:flex-row ${isReversed ? "md:flex-row-reverse" : ""} w-full min-h-[520px]`}
					>
						{/* ── Image panel — claire, sans overlay ── */}
						<div className="expertise-panel-image group/img relative w-full md:w-1/2 min-h-[280px] md:min-h-[520px] overflow-hidden cursor-pointer">
							<Image
								src={item.image}
								alt={item.title}
								fill
								priority={index === 0}
								className="object-cover transition-transform duration-700 group-hover/row:scale-105"
								sizes="(max-width: 768px) 100vw, 50vw"
							/>
							{/* Teinte verte au hover */}
							<div className="absolute inset-0 z-10 bg-primary/0 group-hover/img:bg-primary/25 transition-all duration-500 mix-blend-multiply" />
							{/* Vignette au hover */}
							<div className="absolute inset-0 z-10 opacity-0 group-hover/img:opacity-100 transition-opacity duration-500 bg-[radial-gradient(ellipse_at_center,_transparent_35%,_rgba(0,0,0,0.45)_100%)]" />
							{/* Shine sweep au hover image */}
							<div className="img-shine absolute inset-0 z-20 pointer-events-none" />
						</div>

						{/* ── Content panel — fond blanc ── */}
						<div className={`expertise-panel-content relative z-20 w-full md:w-1/2 flex items-center bg-white ${isReversed ? "expertise-panel-slide-right" : "expertise-panel-slide-left"}`}>
							<div className="px-8 py-12 md:px-12 lg:px-16 max-w-xl w-full">
								{/* Number accent */}
								<span className="expertise-slide-item inline-block text-primary/10 text-[80px] font-black leading-none -mb-6 select-none">
									0{index + 1}
								</span>

								{/* Title */}
								<h2 className="expertise-slide-item text-3xl md:text-4xl font-bold text-gray-text leading-tight mb-4">
									{item.title}
								</h2>

								{/* Accent line */}
								<div className="expertise-slide-item w-16 h-1 bg-accent rounded-full mb-6 transition-all duration-500 group-hover/row:w-28" />

								{/* Description */}
								<p className="expertise-slide-item text-gray-500 text-base md:text-lg leading-relaxed mb-8">
									{item.description}
								</p>

								{/* Tags */}
								<div className="expertise-slide-item flex flex-wrap gap-2 mb-8">
									{item.tags.map((tag) => (
										<span
											key={tag}
											className="text-xs font-medium text-primary bg-primary/8 border border-primary/20 px-3 py-1.5 rounded-full"
										>
											{tag}
										</span>
									))}
								</div>

								{/* CTA */}
								<Link
									href={item.href as "/"}
									className="expertise-slide-item group/btn inline-flex items-center gap-3 bg-primary hover:bg-primary-dark text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 shadow-md"
								>
									{item.ctaLabel}
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
