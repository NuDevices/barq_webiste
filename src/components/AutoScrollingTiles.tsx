// src/components/AutoScrollingTiles.tsx
import React, { useRef, useState } from 'react';

interface Tile {
    title: string;
    description: string;
}

interface AutoScrollingTilesProps {
    tiles: Tile[];
}

export const AutoScrollingTiles: React.FC<AutoScrollingTilesProps> = ({ tiles }) => {
    const scrollRef = useRef<HTMLDivElement>(null);
    const [isDragging, setIsDragging] = useState(false);
    const [startX, setStartX] = useState(0);
    const [scrollLeft, setScrollLeft] = useState(0);

    const handleMouseDown = (e: React.MouseEvent) => {
        setIsDragging(true);
        setStartX(e.pageX - scrollRef.current!.offsetLeft);
        setScrollLeft(scrollRef.current!.scrollLeft);
    };

    const handleMouseMove = (e: React.MouseEvent) => {
        if (!isDragging) return;
        e.preventDefault();
        const x = e.pageX - scrollRef.current!.offsetLeft;
        const walk = (x - startX) * 2;
        if (scrollRef.current) {
            scrollRef.current.scrollLeft = scrollLeft - walk;
        }
    };

    const handleTouchStart = (e: React.TouchEvent) => {
        setIsDragging(true);
        setStartX(e.touches[0].pageX - scrollRef.current!.offsetLeft);
        setScrollLeft(scrollRef.current!.scrollLeft);
    };

    const handleTouchMove = (e: React.TouchEvent) => {
        if (!isDragging) return;
        const x = e.touches[0].pageX - scrollRef.current!.offsetLeft;
        const walk = (x - startX) * 2;
        if (scrollRef.current) {
            scrollRef.current.scrollLeft = scrollLeft - walk;
        }
    };

    const stopDragging = () => {
        setIsDragging(false);
    };

    return (
        <div className="overflow-hidden">
            <div
                ref={scrollRef}
                className="flex gap-4 md:gap-6 cursor-grab active:cursor-grabbing overflow-x-auto"
                onMouseDown={handleMouseDown}
                onMouseMove={handleMouseMove}
                onMouseUp={stopDragging}
                onMouseLeave={stopDragging}
                onTouchStart={handleTouchStart}
                onTouchMove={handleTouchMove}
                onTouchEnd={stopDragging}
                style={{
                    scrollbarWidth: 'none',
                    msOverflowStyle: 'none',
                    WebkitOverflowScrolling: 'touch',
                }}
            >
                {tiles.map((tile, i) => (
                    <div
                        key={i}
                        className="flex-none w-[280px] md:w-96 bg-gray-900/50 rounded-xl p-6 md:p-8 flex flex-col justify-between select-none"
                    >
                        <div>
                            <h3 className="text-md sm:text-lg md:text-xl font-bold mb-2 md:mb-3">{tile.title}</h3>
                            <p className="text-base sm:text-md md:text-lg text-gray-400">{tile.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default AutoScrollingTiles;