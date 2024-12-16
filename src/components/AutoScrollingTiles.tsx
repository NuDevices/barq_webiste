import { useEffect, useRef } from 'react';

interface Tile {
    title: string;
    description: string;
}

interface Props {
    tiles: Tile[];
}

export const AutoScrollingTiles = ({ tiles }: Props) => {
    const scrollRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const scrollContainer = scrollRef.current;
        if (scrollContainer) {
            const scroll = () => {
                if (scrollContainer.scrollLeft >= scrollContainer.scrollWidth - scrollContainer.clientWidth) {
                    scrollContainer.scrollLeft = 0;
                } else {
                    scrollContainer.scrollLeft += 1;
                }
            };
            const timer = setInterval(scroll, 50);
            return () => clearInterval(timer);
        }
    }, []);

    return (
        <div ref={scrollRef} className="flex overflow-x-auto scrollbar-hide gap-6 pb-4">
            {tiles.map((tile, i) => (
                <div key={i} className="flex-none w-96 bg-gray-900/50 rounded-xl p-8">
                    <h3 className="text-xl font-bold mb-3">{tile.title}</h3>
                    <p className="text-gray-400">{tile.description}</p>
                </div>
            ))}
        </div>
    );
};