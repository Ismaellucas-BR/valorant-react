import ButtonFullWidth from "../buttonFullWidth";

export default function WeAreValorant() {
  return (
    <section
      style={{
        backgroundImage:
          "url('https://cmsassets.rgpub.io/sanity/images/dsfx7636/news/c8157d71a4776dd821d05ed6b82d5d875ca03386-5120x1644.png?auto=format&fit=fill&q=80&h=1644')",
      }}
      className="flex flex-col items-center  pt-7 bg-[length:550%] bg-no-repeat bg-center">
      <div className="w-[90%]">
        <div className="flex flex-col gap-3 ">
          <h2 className="font-tungsten text-[4rem] text-azulmarinho leading-16">
            NÓS SOMOS VALORANT
          </h2>
          <p className="text-azulmarinho">DESAFIE SEUS LIMITES</p>
          <span className="text-azulmarinho leading-6">
            Misture o seu estilo e experiência em um cenário global e
            competitivo. Você terá 13 rodadas para atacar e defender com
            disparos certeiros e habilidades táticas. Com apenas uma vida por
            rodada, você deve pensar mais rápido que o oponente se quiser
            sobreviver. Encare inimigos nos modos Competitivo e Sem Ranque, além
            da Disputa da Spike e do Mata-Mata!
          </span>
          <ButtonFullWidth
            color="bg-light-red"
            link="#"
            content="Conheça o Jogo"
          />
        </div>
        <div></div>
      </div>
    </section>
  );
}
