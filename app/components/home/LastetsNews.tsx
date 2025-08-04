import { SquareArrowOutUpRight } from "lucide-react";
export default function LastetsNews() {
  return (
    <section className="flex flex-col items-center w-[90%]">
      <div className="flex justify-between items-center w-full py-3">
        <div className="">
          <h2 className="text-azulmarinho font-tungsten text-[2rem] uppercase  leading-8 w-1/2 md:w-full">
            Últimas Notícias
          </h2>
        </div>
        <div className="flex justify-end gap-3">
          <span className="font-DINNext text-black text-center font-normal text-[0.9rem] w-[60%] md:w-full">
            IR PARA A PÁGINA DE NOTÍCIAS
          </span>
          <SquareArrowOutUpRight className="stroke-light-red " size={20} />
        </div>
      </div>
    </section>
  );
}
