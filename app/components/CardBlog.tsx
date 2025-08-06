import { SquareArrowOutUpRight } from "lucide-react";
import Data from "../data/News.json";

interface CardProps {
  id: number;
  image: string;
  category: string;
  date: string;
  title: string;
  subtitle: string;
}
export default function CardBlog() {
  return Data.map((card: CardProps) => {
    return (
      <div key={card.id}>
        <div className="relative">
          <img src={card.image} className="w-full h-[13.25rem]" />
          <img
            src="https://playvalorant.com/_next/static/node_modules/@riotgames/blades-ui/dist/skins/common/assets/link-square.svg"
            alt="icone de link"
            className="absolute bottom-0 right-0 w-10"
          />
        </div>
        <div>
          <div className="flex gap-3 items-center font-DINNext font-bold mt-3">
            <span className="text-light-red uppercase text-[0.875rem] ">
              {card.category}
            </span>
            <div className="w-[1px] h-4 bg-gray-400" />
            <span className="text-azulmarinho text-[0.75rem]">{card.date}</span>
          </div>
          <div>
            <h2 className="text-[1.125rem] text-azulmarinho font-bold">
              {card.title}
            </h2>

            <span className="text-[0.75rem] text-azulmarinho font-normal">
              {card.subtitle}
            </span>
          </div>
        </div>
      </div>
    );
  });
}
