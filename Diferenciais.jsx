import { motion } from "framer-motion";

const differentials = [
  {
    title: "Projetos Pensados para Fabricação",
    description:
      "Cada projeto é desenvolvido considerando processos reais de corte, dobra, soldagem, montagem e usinagem.",
    icon: "🏭",
  },

  {
    title: "Integração com CNC",
    description:
      "Experiência prática com programação e fabricação em centros de usinagem e tornos CNC.",
    icon: "⚙️",
  },

  {
    title: "Experiência de Chão de Fábrica",
    description:
      "Conhecimento técnico aplicado diretamente na realidade industrial e produtiva.",
    icon: "🛠️",
  },

  {
    title: "Alta Precisão Técnica",
    description:
      "Detalhamento técnico rigoroso para evitar retrabalho e garantir máxima eficiência.",
    icon: "📐",
  },

  {
    title: "Soluções Sob Medida",
    description:
      "Projetos personalizados conforme a necessidade operacional de cada cliente.",
    icon: "🚀",
  },

  {
    title: "Redução de Custos",
    description:
      "Projetos otimizados para fabricação, manutenção e produtividade industrial.",
    icon: "📊",
  },
];

function Differentials() {
  return (
    <section
      id="diferenciais"
      className="section bg-[#0D1422] relative overflow-hidden"
    >
      <div className="absolute inset-0 opacity-5 bg-[linear-gradient(#ffffff22_1px,transparent_1px),linear-gradient(90deg,#ffffff22_1px,transparent_1px)] bg-[size:50px_50px]" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="mb-20">
          <p className="text-[#4A7DB8] uppercase tracking-[4px] mb-4">
            Diferenciais
          </p>

          <h2 className="title">
            Projetos industriais desenvolvidos para produção real.
          </h2>

          <p className="subtitle max-w-3xl mt-6">
            A Vektra Projetos une experiência prática de fabricação,
            modelagem 3D e desenvolvimento industrial para entregar
            soluções realmente viáveis no chão de fábrica.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {differentials.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="
                bg-white/5
                border
                border-white/10
                rounded-3xl
                p-8
                hover:bg-white/10
                transition
              "
            >
              <div className="text-5xl mb-6">
                {item.icon}
              </div>

              <h3 className="text-2xl font-semibold mb-4">
                {item.title}
              </h3>

              <p className="text-[#C7D0D9] leading-8">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Differentials;
